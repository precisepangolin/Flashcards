import { useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const errorRef = useRef();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const LOGIN_URL = '/login'; // Update with your login API endpoint
        

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, {
                username: username,
                password: password
            });
            
            if (response.status === 200) {
                console.log('Response:', response.data.token); // Add this line
                setErrMsg('');
                const token = response.data.token;
                // Store the token in localStorage
                localStorage.setItem('token', token);
                console.log(localStorage)
                window.location.href = '/profile';
            } else if (response.status === 401) {
                console.log(localStorage)
                const errorData = response.data;
                if (errorData.message === 'Username not found') {
                    setErrMsg('Username not found');
                } else if (errorData.message === 'Incorrect password') {
                    setErrMsg('Incorrect password');
                } else {
                    setErrMsg('Failed to login. Please try again.');
                }
                setSuccessMsg('');
            } else {
                setErrMsg('Failed to login. Please try again.');
                setSuccessMsg('');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrMsg('Incorrect username or password.');
            setSuccessMsg('');
        }
    }

    return (
        <section>
            <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <p className={successMsg ? "successmsg" : "offscreen"} aria-live="assertive">{successMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={usernameRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    ref={passwordRef}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button type="submit">Log In</button>
                <p>
                    Nie masz konta?<br />
                    <span className="line">
                            {/*put router link here*/}
                        <a href="/register">Zarejestruj się!</a>
                    </span>
                </p>
            </form>
        </section>
    );
}

export default Login;