import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route, Routes } from 'react-router-dom';
import app from '../../firebase.init';
import User from '../../User/User';
import Finance from '../Finance/Finance';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Members from '../Members/Members';
import RequireAuth from '../RequireAuth/RequireAuth';
import Signup from '../Signup/Signup';

const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='members'>Members</Link>
                <Link to='finance'>Finance</Link>
                {user?.uid &&
                    <Link to='user'>{user?.displayName}</Link>}
                {
                    user?.uid ?
                        <button onClick={() => signOut(auth)}>Log out</button> :
                        <Link to='login'>Log in</Link>
                }
            </nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path='members' element={<Members></Members>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='signup' element={<Signup></Signup>}></Route>
                <Route path='user' element={<User></User>}></Route>
                <Route path='/finance' element={
                    <RequireAuth>
                        <Finance></Finance>
                    </RequireAuth>
                }></Route>
            </Routes>
        </header>
    );
};

export default Header;