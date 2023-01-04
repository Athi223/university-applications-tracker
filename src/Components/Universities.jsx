import { useList } from 'react-firebase-hooks/database'
import Table from 'react-bootstrap/Table'
import { useContext } from 'react'
import { ref, set } from 'firebase/database'
import { FirebaseContext } from '../Contexts/FirebaseContext'
import { Button } from 'react-bootstrap'

export default function Universities() {
	const { user, database } = useContext(FirebaseContext)
	const [snapshots, loading, error] = useList(ref(database, `/users/${user.uid}/universities/`))
	const colorRequirements = requirement => {
		let style
		if(requirement.includes("Not")) style = "danger"
		else if(requirement === "N/A" || requirement === "In Process") style = "primary"
		else style = "success"
		return <span className={`fw-semibold text-${style}`}>{requirement}</span>
	}
	const today = new Date()

	const colorRowType = type => {
		let style
		switch(type) {
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
		if(difference < 0 || status === "Applied") {
			textStyle = "muted"
			bgStyle = ""
		}
		else if(difference < 15) {
			textStyle = "light"
			bgStyle = "danger"
		}
		else if(difference < 30) {
			textStyle = "dark"
			bgStyle = "warning"
		}
		else {
			textStyle = "light"
			bgStyle = "success"
		}
		return `text-${textStyle} bg-${bgStyle}`
	}

	const removeUniversity = (university, key) => {
		if(confirm(`Do you really want to remove ${university} from the list?`)) {
			set(ref(database, `/users/${user.uid}/universities/` + key), null)
		}
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
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{error && <tr><td colSpan={3}><strong>Error: {error}</strong></td></tr>}
					{error && <tr><td colSpan={3}><strong>Loading...</strong></td></tr>}
					{!loading && snapshots && (
						snapshots.map(v => {
							const data = v.val()
							const deadline = new Date(data.deadline)
							const difference = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))
							return (
								<tr className={colorRowType(data.type)} key={v.key}>
									<td>{data.university}</td>
									<td>{colorRequirements(data.status)}</td>
									<td className={colorDeadline(difference, data.status)}>{deadline.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</td>
									<td>{colorRequirements(data.sop)}</td>
									<td>{colorRequirements(data.history)}</td>
									<td>{colorRequirements(data.lor1)}</td>
									<td>{colorRequirements(data.lor2)}</td>
									<td>{colorRequirements(data.lor3)}</td>
									<td>$ {data.fees}</td>
									<td>{colorRequirements(data.feestatus)}</td>
									<td>
										<Button variant="info" size="sm" disabled>✏</Button>{" "}
										<Button variant="danger" size="sm" onClick={
											() => removeUniversity(data.university, v.key)
										}>🗑</Button>
									</td>
								</tr>
							)
						})
					)}
				</tbody>
			</Table>
		</div>
	)
}