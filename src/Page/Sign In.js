import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './SignIn.css'; 
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navi = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username or email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/api/signin', { username, password });
        if (response.status === 200) {
          navi("/");
        }
      } catch (error) {
        setLoginError('Invalid credentials');
      }
    } else {
      setErrors(validationErrors); 
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1 className="sign-in-text">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="username">Username or Email</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            className="sign-in-input" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          {errors.username && <span className="error">{errors.username}</span>}

          <label className="label" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className="sign-in-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms" 
              required 
            />
            <label className="label" htmlFor="terms">
              I agree to the 
              <a className="terms-link" href="https://www.royalenfield.com/in/en/legal/terms-and-conditions/"> Terms of Use</a> & 
              <a className="policy-link" href="https://www.royalenfield.com/in/en/legal/private-import-policy/"> Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="sign-in-button">Sign In</button>

          {loginError && <span className="error">{loginError}</span>}

          <div className="create-account">
            <p>Create an account? <a onClick={() => { navi("/Signup") }}>Click here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;