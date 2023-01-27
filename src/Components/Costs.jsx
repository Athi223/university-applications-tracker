import { useContext } from "react"
import { FirebaseDBContext } from "../Contexts/FirebaseDBContext"
import { Table } from "react-bootstrap"
import currencies from "../currencies.json"

export default function Costs({ currency, exchangeRates }) {
	const { costs } = useContext(FirebaseDBContext)

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
						<th className="text-end">Fees (USD)</th>
						<th className="text-end">Fees ({currency})</th>
						<th className="text-end">Total (USD)</th>
						<th className="text-end">Total ({currency})</th>
					</tr>
				</thead>
				<tbody>
					{costs.map(cost => {
						const total =
							cost.fees +
							(cost.gre !== "Not Required" ? 30 : 0) +
							(cost.toefl !== "Not Required" ? 20 : 0)
						grand_total += total
						return (
							<tr className={colorRowType(cost.type)} key={cost.key}>
								<td>{cost.university}</td>
								<td className={colorTestStatus(cost.gre)}>{cost.gre}</td>
								<td className={colorTestStatus(cost.toefl)}>{cost.toefl}</td>
								<td className="text-end">$ {cost.fees}</td>
								<td className="text-end">
									{currencies[currency]} {(cost.fees * exchangeRates[currency]).toFixed(2)}
								</td>
								<td className="text-end">$ {total}</td>
								<td className="text-end">
									{currencies[currency]} {(total * exchangeRates[currency]).toFixed(2)}
								</td>
							</tr>
						)
					})}
					<tr className="table-dark">
						<th className="text-center" colSpan={5}>
							Grand Total
						</th>
						<th className="text-end">$ {grand_total}</th>
						<th className="text-end">
							{currencies[currency]} {(grand_total * exchangeRates[currency]).toFixed(2)}
						</th>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
