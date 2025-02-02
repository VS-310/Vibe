import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <div>
            <h2 style={{ marginTop: "5px", backgroundColor: "gray", color: "black" }}> Login </h2>
            <input style={{ marginTop: "5px", border: "1px solid gray", borderRadius: "5px"}}
                type='text' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=' username'/>
            <br/>
            <input style={{ marginTop: "5px", border: "1px solid gray", borderRadius: "5px"}}
                type='password' 
                minLength={4} maxLength={9} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=' password'/>
            <br/>
            <button style={{ marginTop: "5px", borderRadius: "5px"}}
                onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
