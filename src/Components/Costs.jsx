import { useList } from 'react-firebase-hooks/database'
import Table from 'react-bootstrap/Table'
import { useContext } from 'react'
import { ref } from 'firebase/database'
import { FirebaseContext } from '../Contexts/FirebaseContext'

export default function Costs() {
	const { user, database } = useContext(FirebaseContext)
	const [snapshots, loading, error] = useList(ref(database, `/users/${user.uid}/universities/`))
	let grand_total = 0

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
					{error && <tr><td colSpan={3}><strong>Error: {error}</strong></td></tr>}
					{error && <tr><td colSpan={3}><strong>Loading...</strong></td></tr>}
					{!loading && snapshots && (
						snapshots.map(v => {
							const data = v.val()
							const total = data.fees + (data.gre ? 30 : 0) + (data.toefl ? 20 : 0)
							grand_total += total
							return (
								<tr className={colorRowType(data.type)} key={v.key}>
									<td>{data.university}</td>
									<td>{data.gre ? "✔" : "❌"}</td>
									<td>{data.toefl ? "✔" : "❌"}</td>
									<td>$ {data.fees}</td>
									<td>$ {total}</td>
								</tr>
							)
						})
					)}
					{!loading && snapshots && <tr className="table-dark">
						<th className="text-center" colSpan={4}>Grand Total</th>
						<th>$ {grand_total}</th>
					</tr>}
				</tbody>
			</Table>
		</div>
	)
}