import React,{ useState } from 'react'
import './login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleSubmit=(e)=>{
      e.preventDefault();
      if (isFormValid()) {
        console.log('Form submitted:', { username, password });
        window.location.href="/home"

        
      }

  }
  const handleUsername=(e)=>{
    const { value } = e.target;
      setUsername(value);
      setUsernameError(value.trim() ? (/\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email') : 'Email is required');

  }
  const handlePassword=(e)=>{
    const { value } = e.target;
      setPassword(value);
      setPasswordError(value.trim() ? (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(value) ? '' : 'Password must contain at least one uppercase letter, one lowercase letter, and one number') : 'Password is required');

  }
  const isFormValid = () => {
    return !usernameError && !passwordError;
  };

  return (
    <div>
        <div className="container">
    <h2>Login</h2>
    <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required value={username} onChange={handleUsername}/>
            {usernameError && <span className="error">{usernameError}</span>}
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required value={password} onChange={handlePassword}/>
            {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button type="submit" className="btn" disabled={!isFormValid()}>Login</button>
    </form>
</div>

    </div>
  )
}

export default Login