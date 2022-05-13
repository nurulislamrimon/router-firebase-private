import React from 'react';

const Signup = () => {
    return (
        <form className='center'>
            <input type="text" name="username" id="user" placeholder='user name' />
            <br />
            <input type="text" name="" id="mail" placeholder='example@gmail.com' />
            <br />
            <input type="password" name="" id="password" placeholder='password' />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Signup;