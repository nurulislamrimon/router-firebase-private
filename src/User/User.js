import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFirebase from '../CustomHooks/CustomHooks';
import app from '../firebase.init';

const User = () => {
    // const { user } = useFirebase();
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className='user-info flex-center'>
                <img src={user?.photoURL} alt="" width={50} height={50} />
                <h2>Hello, <span>{user?.displayName}</span>!</h2>
            </div>
            <h1 className='gratitude'>Thanks for being here!</h1>
            <p className='mail'>{user?.email}</p>
        </div>
    );
};

export default User;