import { useContext, useRef } from "react"
import { FirebaseAuthContext } from "../Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { ref, child, push, update } from "firebase/database"
import { Button, Form, InputGroup, Modal } from "react-bootstrap"

export default function AddUniversity({ showUniversityModal, setShowUniversityModal }) {
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
