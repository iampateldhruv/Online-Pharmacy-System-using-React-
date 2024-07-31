import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './RegistrationForm.css'

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const auth = getAuth();
  const db = getFirestore();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        cart: [],
        purchaseHistory: []
      });

      alert('User registered successfully!');
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      if (user) {
        // Check if user exists in Firestore
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
          // Create user profile in Firestore
          await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            cart: [],
            purchaseHistory: []
          });
        }
        alert('User signed up with Google successfully!');
      }
    } catch (error) {
      console.error("Error signing up with Google:", error);
      alert(error.message);
    }
  };

  return (
    <div className="registration-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleGoogleSignup} className="google-signup"><img src="./images/googlesignupbuttonfinal.png" alt="Google Login" className="logo" /></button>
    </div>
  );
};

export default RegistrationForm;
