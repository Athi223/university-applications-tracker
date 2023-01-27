import Table from "react-bootstrap/Table"
import { useContext, useState } from "react"
import { ref, set } from "firebase/database"
import { FirebaseAuthContext } from "../Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Check, Edit, Slash, Trash, X } from "react-feather"
import UpdateUniversity from "./UpdateUniversity"

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
										onClick={() => updateUniversity({ ...university, key: university.key })}>
										<Edit />
									</Button>{" "}
									<Button
										variant="danger"
										size="sm"
										onClick={() => removeUniversity(university.university, university.key)}>
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
