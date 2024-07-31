import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      console.log('Google login successful:', userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="email-login-button" onClick={handleEmailLogin}>Login </button>
      <button className="google-login-button" onClick={handleGoogleLogin}>
        <img src="./images/googlesignupbuttonfinal.png" alt="Google Login" className="logo" />
      </button>
    </div>
  );
};

export default LoginForm;
