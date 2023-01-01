import { useContext } from "react"
import { FirebaseContext } from "../Contexts/FirebaseContext"
import { useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth'
import Button from 'react-bootstrap/Button'

export default function Authentication() {
	const { user } = useContext(FirebaseContext)
	return user ? <SignOut /> : <SignIn />
}

const SignIn = () => {
	const { auth } = useContext(FirebaseContext)
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

	if (error) {
		alert(error.message)
	}
	if (user) {
		alert(`Signed In User: ${user.email}`)
	}
	return <Button variant="outline-light" onClick={() => signInWithGoogle()}>Sign In</Button>
}

const SignOut = () => {
	const { auth } = useContext(FirebaseContext)
	const [signOut, loading, error] = useSignOut(auth)

	if (error) {
		return <p>Error: {error.message}</p>
	}
	if (loading) {
		return <p>Loading...</p>
	}
	return <Button variant="outline-light" onClick={signOut}>Sign out</Button>
}
