import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleSignIn = () => {
        signInWithGoogle()
            .then(() => navigate(from, { replace: true }))
    }

    return (
        <div className='center'>
            <input type="text" name="" id="mail" placeholder='example@gmail.com' />
            <br />
            <input type="password" name="" id="password" placeholder='password' />
            <br />
            <button>Submit</button>
            <br />
            <button onClick={handleSignIn}>Log in with Google</button>
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default Login;