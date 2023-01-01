import { useContext, useRef, useState } from "react"
import { FirebaseContext } from "../Contexts/FirebaseContext"
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Universities from "./Universities"
import { ref, child, push, update } from "firebase/database"

export default function MainContent() {
	const { user } = useContext(FirebaseContext)
	const [ showUniversityModal, setShowUniversityModal ] = useState(false)

	return (
		<>
			<div className="d-flex justify-content-between">
				<h4>Welcome, {user.displayName}</h4>
				<button className="btn btn-primary" onClick={() => setShowUniversityModal(true)}>
					Add University
				</button>
			</div>
			<Universities />
			<AddUniversity showUniversityModal={showUniversityModal} setShowUniversityModal={setShowUniversityModal} />
		</>
	)
}

function AddUniversity({ showUniversityModal, setShowUniversityModal }) {
	const { user, database } = useContext(FirebaseContext)
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
				deadline : formRef.current.deadline.value,
				sop: formRef.current.sop.value,
				lor1: formRef.current.lor1.value,
				lor2: formRef.current.lor2.value,
				lor3: formRef.current.lor3.value,
				history: formRef.current.history.value,
				fees: formRef.current.fees.value,
				feestatus: formRef.current.feestatus.value,
			}
		}
		return update(ref(database), updates)
	}

	return (
		<Modal show={showUniversityModal} onHide={closeUniversityModal} backdrop="static" centered>
			<Modal.Header closeButton>
				<Modal.Title>Add University</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form ref={formRef} onSubmit={addUniversity}>
					<InputGroup className="mb-3">
						<Form.Control type="text" placeholder="Enter University Name" id="university" required />
						<Form.Select id="type" required>
							<option value="Safe">Safe</option>
							<option value="Moderate">Moderate</option>
							<option value="Ambitious">Ambitious</option>
						</Form.Select>
					</InputGroup>
					<Form.Group className="mb-3" controlId="status">
						<Form.Label>Application Status</Form.Label>
						<Form.Select required>
							<option value="Not Applied">Not Applied</option>
							<option value="In Process">In Process</option>
							<option value="Applied">Applied</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="deadline">
						<Form.Label>Application Deadline</Form.Label>
						<Form.Control type="date" placeholder="Application Deadline" required />
					</Form.Group>
					<InputGroup className="mb-3">
						<InputGroup.Text>Statement of Purpose</InputGroup.Text>
						<Form.Select id="sop" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Text>Personal History Statement</InputGroup.Text>
						<Form.Select id="history" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Text>Letter of Recommendation - 1</InputGroup.Text>
						<Form.Select id="lor1" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Text>Letter of Recommendation - 2</InputGroup.Text>
						<Form.Select id="lor2" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Text>Letter of Recommendation - 3</InputGroup.Text>
						<Form.Select id="lor3" required>
							<option value="Not Submitted">Not Submitted</option>
							<option value="Submitted">Submitted</option>
							<option value="N/A">N/A</option>
						</Form.Select>
					</InputGroup>
					<InputGroup className="mb-3">
						<Form.Control type="number" min={0} max={1000} placeholder="Application Fees in $" id="fees" required />
						<Form.Select id="feestatus" required>
							<option value="Not Paid">Not Paid</option>
							<option value="Paid">Paid</option>
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
