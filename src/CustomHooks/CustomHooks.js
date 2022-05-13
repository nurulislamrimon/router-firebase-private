import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase.init'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(res => setUser(res.user))

    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => { setUser(user) })
    }, [])

    return { user, setUser, signInWithGoogle, handleSignOut }
}
export default useFirebase;