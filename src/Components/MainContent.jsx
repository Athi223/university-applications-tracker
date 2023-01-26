import { useContext, useRef, useState } from "react"
import { FirebaseAuthContext } from "../Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { Button, Card, Form, InputGroup, Modal } from "react-bootstrap"
import { useList } from "react-firebase-hooks/database"
import { ref, child, push, update } from "firebase/database"
import Universities from "./Universities"
import Costs from "./Costs"
import { useEffect } from "react"
import currencies from "../currencies.json"

export default function MainContent() {
	const { user } = useContext(FirebaseAuthContext)
	const { database, setUniversities, setCosts } = useContext(FirebaseDBContext)
	const [showUniversityModal, setShowUniversityModal] = useState(false)
	const [page, setPage] = useState(false)
	const [currency, setCurrency] = useState("INR")
	const [exchangeRates, setExchangeRates] = useState(null)
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
			<div className="d-flex justify-content-between">
				<h4>Welcome, {user.displayName}</h4>
				<div className="row">
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
				<div className="row">
					<div className="col-auto">
						<button className="btn btn-primary" onClick={() => setShowUniversityModal(true)}>
							Add University
						</button>
					</div>
					<div className="col">
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
				</div>
			</div>
			<Card className="mt-3">
				<Card.Body>
					<Card.Title className="text-center text-info">{page ? "Costs" : "Applications"}</Card.Title>
					{page ? <Costs currency={currency} exchangeRates={exchangeRates} /> : <Universities />}
				</Card.Body>
			</Card>
			<AddUniversity showUniversityModal={showUniversityModal} setShowUniversityModal={setShowUniversityModal} />
		</>
	)
}

function AddUniversity({ showUniversityModal, setShowUniversityModal }) {
	const { user } = useContext(FirebaseAuthContext)
	const { database } = useContext(FirebaseDBContext)
	const closeUniversityModal = () => setShowUniversityModal(false)
	const formRef = useRef()
	const addUniversity = e => {
		e.preventDefault()
		const path = `/users/${user.uid}/universities/`
		const URL = `${path}${push(child(ref(database), path)).key}`
		const updates = {
			[URL]: {
				university: formRef.current.university.value,
				type: formRef.current.type.value,
				status: formRef.current.status.value,
				deadline: formRef.current.deadline.value,
				sop: formRef.current.sop.value,
				lor1: formRef.current.lor1.value,
				lor2: formRef.current.lor2.value,
				lor3: formRef.current.lor3.value,
				history: formRef.current.history.value,
				fees: parseFloat(formRef.current.fees.value),
				feestatus: formRef.current.feestatus.value,
				gre: formRef.current.gre.value,
				toefl: formRef.current.toefl.value,
				result: "Pending",
			},
		}
		formRef.current.reset()
		return update(ref(database), updates)
	}

	return (
		<Modal show={showUniversityModal} onHide={closeUniversityModal} backdrop="static" centered>
			<Modal.Header closeButton>
				<Modal.Title>Add University</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form ref={formRef} onSubmit={addUniversity}>
					<InputGroup className="mb-2">
						<Form.Control type="text" placeholder="Enter University Name" id="university" required />
						<Form.Select id="type" required>
							<option value="Safe">Safe</option>
							<option value="Moderate">Moderate</option>
							<option value="Ambitious">Ambitious</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Application Status</InputGroup.Text>
						<Form.Select id="status" required>
							<option value="Not Applied">Not Applied</option>
							<option value="In Process">In Process</option>
							<option value="Applied">Applied</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Application Deadline</InputGroup.Text>
						<Form.Control id="deadline" type="date" placeholder="Application Deadline" required />
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Statement of Purpose</InputGroup.Text>
						<Form.Select id="sop" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Personal History Statement</InputGroup.Text>
						<Form.Select id="history" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Letter of Recommendation - 1</InputGroup.Text>
						<Form.Select id="lor1" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Letter of Recommendation - 2</InputGroup.Text>
						<Form.Select id="lor2" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>Letter of Recommendation - 3</InputGroup.Text>
						<Form.Select id="lor3" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<Form.Control
							type="number"
							min={0}
							max={1000}
							placeholder="Application Fees in $"
							id="fees"
							required
						/>
						<Form.Select id="feestatus" required>
							<option value="Not Paid">Not Paid</option>
							<option value="Paid">Paid</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-2">
						<InputGroup.Text>GRE:</InputGroup.Text>
						<Form.Select id="gre" required>
							<option value="Not Required">Not Required</option>
							<option value="Score Not Sent">Score Not Sent</option>
							<option value="Score Sent">Score Sent</option>
						</Form.Select>
						<InputGroup.Text>TOEFL:</InputGroup.Text>
						<Form.Select id="toefl" required>
							<option value="Not Required">Not Required</option>
							<option value="Score Not Sent">Score Not Sent</option>
							<option value="Score Sent">Score Sent</option>
						</Form.Select>
					</InputGroup>
					<div className="text-center">
						<Button variant="primary" type="submit">
							Add
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	)
}
