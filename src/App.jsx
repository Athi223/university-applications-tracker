import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { useAuthState } from "react-firebase-hooks/auth"
import Authentication from "./Components/Authentication"
import MainContent from "./Components/MainContent"
import { FirebaseAuthContext } from "./Contexts/FirebaseAuthContext"
import { FirebaseDBContext } from "./Contexts/FirebaseDBContext"

// Your web app's Firebase configuration
import firebaseConfig from "./firebaseConfig.json"

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

export default function App() {
	const [user, loading, error] = useAuthState(auth)
	const [universities, setUniversities] = useState([])
	const [costs, setCosts] = useState([])

	return (
		<FirebaseAuthContext.Provider value={{ auth, user }}>
			<div className="d-flex flex-column vh-100 vw-100">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							University Applications Tracker
						</a>
						<Authentication />
					</div>
				</nav>
				<main className="flex-grow-1 p-4">
					{user ? (
						<FirebaseDBContext.Provider
							value={{ database, universities, setUniversities, costs, setCosts }}>
							<MainContent />
						</FirebaseDBContext.Provider>
					) : (
						<h3 className="text-center">You need to be Signed In to access all features</h3>
					)}
				</main>
			</div>
		</FirebaseAuthContext.Provider>
	)
}
