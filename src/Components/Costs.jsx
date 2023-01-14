import { useList } from "react-firebase-hooks/database"
import Table from "react-bootstrap/Table"
import { useContext } from "react"
import { ref } from "firebase/database"
import { FirebaseContext } from "../Contexts/FirebaseContext"

export default function Costs() {
	const { user, database } = useContext(FirebaseContext)
	const [snapshots, loading, error] = useList(ref(database, `/users/${user.uid}/universities/`))
	let grand_total = 0

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

	const colorTestStatus = status => {
		let style
		switch (status) {
			case "Score Sent":
				style = "success"
				break
			case "Score Not Sent":
				style = "danger"
				break
			case "Not Required":
				style = "primary"
				break
			default:
				style = ""
		}
		return `text-${style} fw-bold`
	}

	return (
		<div className="table-responsive">
			<Table bordered>
				<thead className="table-dark">
					<tr>
						<th>University</th>
						<th>GRE</th>
						<th>TOEFL</th>
						<th>Fees</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{error && (
						<tr>
							<td colSpan={3}>
								<strong>Error: {error}</strong>
							</td>
						</tr>
					)}
					{error && (
						<tr>
							<td colSpan={3}>
								<strong>Loading...</strong>
							</td>
						</tr>
					)}
					{!loading &&
						snapshots &&
						snapshots.map(v => {
							const data = v.val()
							const total =
								data.fees +
								(data.gre !== "Not Required" ? 30 : 0) +
								(data.toefl !== "Not Required" ? 20 : 0)
							grand_total += total
							return (
								<tr className={colorRowType(data.type)} key={v.key}>
									<td>{data.university}</td>
									<td className={colorTestStatus(data.gre)}>{data.gre}</td>
									<td className={colorTestStatus(data.toefl)}>{data.toefl}</td>
									<td className="text-end">$ {data.fees}</td>
									<td className="text-end">$ {total}</td>
								</tr>
							)
						})}
					{!loading && snapshots && (
						<tr className="table-dark">
							<th className="text-center" colSpan={4}>
								Grand Total
							</th>
							<th className="text-end">$ {grand_total}</th>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	)
}
