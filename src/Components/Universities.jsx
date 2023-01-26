import Table from "react-bootstrap/Table"
import { useContext, useEffect, useState } from "react"
import { ref, set, update } from "firebase/database"
import { FirebaseAuthContext } from "../Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { Button, InputGroup, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Check, Edit, Slash, Trash, X } from "react-feather"

export default function Universities() {
	const { user } = useContext(FirebaseAuthContext)
	const { database, universities } = useContext(FirebaseDBContext)
	const [currentUniversity, setCurrentUniversity] = useState(null)
	const [showUniversityModal, setShowUniversityModal] = useState(false)

	const colorRequirements = requirement => {
		let style
		if (requirement.includes("Not") || requirement === "Rejected") style = "danger"
		else if (["N/A", "In Process", "Pending"].includes(requirement)) style = "primary"
		else style = "success"
		return <span className={`fw-semibold text-${style}`}>{requirement}</span>
	}

	const colorIcons = requirement => {
		switch (requirement) {
			case "Not Submitted":
				return <X className="text-danger" />
			case "Submitted":
				return <Check className="text-success" />
			case "N/A":
				return <Slash className="text-primary" />
			default:
				return <></>
		}
	}

	const colorRowType = type => {
		let style
		switch (type) {
			case "Ambitious":
				style = "danger"
				break
			case "Moderate":
				style = "warning"
				break
			case "Safe":
				style = "success"
				break
			default:
				style = ""
		}
		return `table-${style}`
	}

	const colorDeadline = (difference, status) => {
		let textStyle, bgStyle
		if (difference < 0 || status === "Applied") {
			textStyle = "muted"
			bgStyle = ""
		} else if (difference < 15) {
			textStyle = "light"
			bgStyle = "danger"
		} else if (difference < 30) {
			textStyle = "dark"
			bgStyle = "warning"
		} else {
			textStyle = "light"
			bgStyle = "success"
		}
		return `text-${textStyle} bg-${bgStyle}`
	}

	const removeUniversity = (university, key) => {
		if (confirm(`Do you really want to remove ${university} from the list?`)) {
			set(ref(database, `/users/${user.uid}/universities/` + key), null)
		}
	}

	const updateUniversity = university => {
		setCurrentUniversity(university)
		setShowUniversityModal(true)
	}

	return (
		<div className="table-responsive">
			<Table bordered>
				<thead className="table-dark">
					<tr>
						<th>University</th>
						<th>Status</th>
						<th>Deadline</th>
						<th>SOP</th>
						<th>Personal History</th>
						<th>LOR1</th>
						<th>LOR2</th>
						<th>LOR3</th>
						<th>Fees</th>
						<th>Fees Status</th>
						<th>Result</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{universities.map(university => {
						return (
							<tr className={colorRowType(university.type)} key={university.key}>
								<td>{university.university}</td>
								<td>{colorRequirements(university.status)}</td>
								<td className={colorDeadline(university.difference, university.status)}>
									{university.deadline.toLocaleDateString(undefined, {
										year: "numeric",
										month: "short",
										day: "numeric",
									})}
								</td>
								<td>
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>{colorRequirements(university.sop)}</Tooltip>}>
										{colorIcons(university.sop)}
									</OverlayTrigger>
								</td>
								<td>
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>{colorRequirements(university.history)}</Tooltip>}>
										{colorIcons(university.history)}
									</OverlayTrigger>
								</td>
								<td>
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>{colorRequirements(university.lor1)}</Tooltip>}>
										{colorIcons(university.lor1)}
									</OverlayTrigger>
								</td>
								<td>
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>{colorRequirements(university.lor2)}</Tooltip>}>
										{colorIcons(university.lor2)}
									</OverlayTrigger>
								</td>
								<td>
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>{colorRequirements(university.lor3)}</Tooltip>}>
										{colorIcons(university.lor3)}
									</OverlayTrigger>
								</td>
								<td className="text-end">$ {university.fees}</td>
								<td>{colorRequirements(university.feestatus)}</td>
								<td>{colorRequirements(university.result)}</td>
								<td>
									<Button
										variant="info"
										size="sm"
										onClick={() => updateUniversity({ ...university, key: v.key })}>
										<Edit />
									</Button>{" "}
									<Button
										variant="danger"
										size="sm"
										onClick={() => removeUniversity(university.university, v.key)}>
										<Trash />
									</Button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
			<UpdateUniversity
				showUniversityModal={showUniversityModal}
				setShowUniversityModal={setShowUniversityModal}
				currentUniversity={currentUniversity}
			/>
		</div>
	)
}

function UpdateUniversity({ showUniversityModal, setShowUniversityModal, currentUniversity }) {
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
		return update(ref(database), updates)
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
