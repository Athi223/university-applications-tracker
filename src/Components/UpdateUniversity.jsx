import { useContext, useEffect, useState } from "react"
import { ref, update } from "firebase/database"
import { FirebaseAuthContext } from "../Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { Button, InputGroup, Form, Modal } from "react-bootstrap"

export default function UpdateUniversity({ showUniversityModal, setShowUniversityModal, currentUniversity, setToast }) {
	const { user } = useContext(FirebaseAuthContext)
	const { database } = useContext(FirebaseDBContext)
	const closeUniversityModal = () => setShowUniversityModal(false)
	const [form, setForm] = useState(null)

	useEffect(
		() =>
			setForm({
				university: currentUniversity?.university,
				type: currentUniversity?.type,
				status: currentUniversity?.status,
				deadline: currentUniversity?.deadline,
				feestatus: currentUniversity?.feestatus,
				sop: currentUniversity?.sop,
				lor1: currentUniversity?.lor1,
				lor2: currentUniversity?.lor2,
				lor3: currentUniversity?.lor3,
				history: currentUniversity?.history,
				fees: parseFloat(currentUniversity?.fees),
				key: currentUniversity?.key,
				gre: currentUniversity?.gre,
				toefl: currentUniversity?.toefl,
				result: currentUniversity?.result,
			}),
		[currentUniversity]
	)

	const handleChange = e => {
		setForm(prevForm => {
			return {
				...prevForm,
				[e.target.id]: e.target.value,
			}
		})
	}

	const updateUniversity = e => {
		e.preventDefault()
		const path = `/users/${user.uid}/universities/${form.key}`
		const updates = {
			[path]: {
				university: form.university,
				type: form.type,
				status: form.status,
				deadline: form.deadline,
				sop: form.sop,
				lor1: form.lor1,
				lor2: form.lor2,
				lor3: form.lor3,
				history: form.history,
				fees: parseFloat(form.fees),
				feestatus: form.feestatus,
				gre: form.gre,
				toefl: form.toefl,
				result: form.result,
			},
		}
		update(ref(database), updates)
			.then(() => {
				closeUniversityModal()
				setToast({
					show: true,
					title: "Update Successful",
					content: (
						<>
							Successfully updated details for : <b>{form.university}</b>
							<br />
							Please{" "}
							<Button size="sm" onClick={() => window.location.reload()}>
								Refresh
							</Button>{" "}
							to view latest details
						</>
					),
				})
			})
			.catch(e => console.error(e))
	}

	return (
		currentUniversity && (
			<Modal show={showUniversityModal} onHide={closeUniversityModal} backdrop="static" centered>
				<Modal.Header closeButton>
					<Modal.Title>{currentUniversity.university}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={updateUniversity}>
						<InputGroup className="mb-2">
							<InputGroup.Text>Application Status</InputGroup.Text>
							<Form.Select id="status" value={form.status} onChange={handleChange} required>
								<option value="Not Applied">Not Applied</option>
								<option value="In Process">In Process</option>
								<option value="Applied">Applied</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Fee Status</InputGroup.Text>
							<Form.Select id="feestatus" value={form.feestatus} onChange={handleChange} required>
								<option value="Not Paid">Not Paid</option>
								<option value="Paid">Paid</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Statement of Purpose</InputGroup.Text>
							<Form.Select id="sop" value={form.sop} onChange={handleChange} required>
								<option value="Not Submitted">Not Submitted</option>
								<option value="Submitted">Submitted</option>
								<option value="N/A">N/A</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Personal History Statement</InputGroup.Text>
							<Form.Select id="history" value={form.history} onChange={handleChange} required>
								<option value="Not Submitted">Not Submitted</option>
								<option value="Submitted">Submitted</option>
								<option value="N/A">N/A</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Letter of Recommendation - 1</InputGroup.Text>
							<Form.Select id="lor1" value={form.lor1} onChange={handleChange} required>
								<option value="Not Submitted">Not Submitted</option>
								<option value="Submitted">Submitted</option>
								<option value="N/A">N/A</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Letter of Recommendation - 2</InputGroup.Text>
							<Form.Select id="lor2" value={form.lor2} onChange={handleChange} required>
								<option value="Not Submitted">Not Submitted</option>
								<option value="Submitted">Submitted</option>
								<option value="N/A">N/A</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Letter of Recommendation - 3</InputGroup.Text>
							<Form.Select id="lor3" value={form.lor3} onChange={handleChange} required>
								<option value="Not Submitted">Not Submitted</option>
								<option value="Submitted">Submitted</option>
								<option value="N/A">N/A</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>GRE:</InputGroup.Text>
							<Form.Select id="gre" value={form.gre} onChange={handleChange} required>
								<option value="Not Required">Not Required</option>
								<option value="Score Not Sent">Score Not Sent</option>
								<option value="Score Sent">Score Sent</option>
							</Form.Select>
							<InputGroup.Text>TOEFL:</InputGroup.Text>
							<Form.Select id="toefl" value={form.toefl} onChange={handleChange} required>
								<option value="Not Required">Not Required</option>
								<option value="Score Not Sent">Score Not Sent</option>
								<option value="Score Sent">Score Sent</option>
							</Form.Select>
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroup.Text>Result</InputGroup.Text>
							<Form.Select id="result" value={form.result} onChange={handleChange} required>
								<option value="Pending">Pending</option>
								<option value="Accepted">Accepted</option>
								<option value="Rejected">Rejected</option>
							</Form.Select>
						</InputGroup>
						<div className="text-center">
							<Button variant="primary" type="submit">
								Update
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		)
	)
}
