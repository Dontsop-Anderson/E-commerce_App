import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import '../App.css';

const Main = () => {
    const [user, setUser] = useState([]);

    return (
        <div>
            <h1>Welcome to my Web Application</h1>
            <SignIn user={user} setUser={setUser}/>
        </div>
    )
}

export default Main;