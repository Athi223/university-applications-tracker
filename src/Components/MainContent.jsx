import { useContext, useState, useEffect } from "react"
import { FirebaseAuthContext } from "../Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { useList } from "react-firebase-hooks/database"
import { ref } from "firebase/database"
import { Button, Card, Form, Toast, ToastContainer } from "react-bootstrap"
import Universities from "./Universities"
import Costs from "./Costs"
import AddUniversity from "./AddUniversity"
import currencies from "../currencies.json"

export default function MainContent() {
	const { user } = useContext(FirebaseAuthContext)
	const { database, setUniversities, setCosts } = useContext(FirebaseDBContext)
	const [showUniversityModal, setShowUniversityModal] = useState(false)
	const [page, setPage] = useState(false)
	const [currency, setCurrency] = useState("INR")
	const [exchangeRates, setExchangeRates] = useState(null)
	const [toast, setToast] = useState({ show: false, title: "", content: "" })
	const [snapshots, loading, error] = useList(ref(database, `/users/${user.uid}/universities/`))

	useEffect(() => {
		fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_FREECURRENCYAPI_KEY}`)
			.then(response => response.json())
			.then(data => setExchangeRates(data.data))
	}, [])

	useEffect(() => {
		if (!loading && !error) {
			const today = new Date()

			setUniversities(
				snapshots.map(v => {
					const data = v.val()
					const deadline = new Date(data.deadline)
					const difference = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))
					return {
						key: v.key,
						university: data.university,
						deadline: deadline,
						difference: difference,
						type: data.type,
						status: data.status,
						sop: data.sop,
						history: data.history,
						lor1: data.lor1,
						lor2: data.lor2,
						lor3: data.lor3,
						gre: data.gre,
						toefl: data.toefl,
						fees: data.fees,
						feestatus: data.feestatus,
						result: data.result,
					}
				})
			)
			setCosts(
				snapshots.map(v => {
					const data = v.val()
					return {
						key: v.key,
						university: data.university,
						fees: data.fees,
						gre: data.gre,
						toefl: data.toefl,
						type: data.type,
					}
				})
			)
		}
	}, [currency, error, loading])

	return (
		<>
			<div className="row">
				<div className="col">
					<h4>Welcome, {user.displayName}</h4>
				</div>
				<div className="col-auto">
					<div className="row justify-content-center">
						<div className="col">
							<p>Applications</p>
						</div>
						<div className="col">
							<Form.Check type="switch" value={page} onChange={() => setPage(prev => !prev)} />
						</div>
						<div className="col">
							<p>Costs</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row justify-content-end">
						{page && (
							<div className="col-auto">
								<Form.Select
									aria-label="Select Currency"
									value={currency}
									onChange={e => setCurrency(e.target.value)}>
									{Object.keys(currencies).map(v => (
										<option key={v} value={v}>
											{v}
										</option>
									))}
								</Form.Select>
							</div>
						)}
						<div className="col-auto">
							<Button variant="outline-primary" onClick={() => setShowUniversityModal(true)}>
								Add University
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Card className="mt-3">
				<Card.Body>
					<Card.Title className="text-center text-info">{page ? "Costs" : "Applications"}</Card.Title>
					{page ? (
						<Costs currency={currency} exchangeRates={exchangeRates} />
					) : (
						<Universities setToast={setToast} />
					)}
				</Card.Body>
			</Card>
			<ToastContainer className="p-3" position="bottom-end">
				<Toast
					onClose={() => setToast(prevToast => ({ ...prevToast, show: false }))}
					show={toast.show}
					delay={5000}
					autohide>
					<Toast.Header>
						<strong className="me-auto">{toast.title}</strong>
					</Toast.Header>
					<Toast.Body>{toast.content}</Toast.Body>
				</Toast>
			</ToastContainer>
			<AddUniversity showUniversityModal={showUniversityModal} setShowUniversityModal={setShowUniversityModal} />
		</>
	)
}
