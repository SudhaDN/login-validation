import React, { useState } from 'react';
import axios from 'axios'; 

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};

    // First name validation
    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    // Last name validation
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    // Email validation
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // mobile validation
    if(!Mobile.trim()){
      errors.Mobile = 'Mobile number is required';
    } else if (Mobile.trim().length = 10){
      errors.Mobile = 'Enter 10 digit number';
    }

    // Password validation
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.trim().length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

     // Username validation
     if (!username.trim()) {
      errors.username = 'Username is required';
    } else {
      // Check if user exists
      try {
        const response = await axios.get(`/api/users/${username}`);
        if (response.data) {
          errors.username = 'Username already taken';
        }
      } catch (error) {
        console.error(error);
      }
    }

    // Set errors state
    setErrors(errors);

    // Submit the form if there are no errors
    if (Object.keys(errors).length === 0) {
      // Your code to submit the form goes here
      console.log('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>

      <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
      <label htmlFor="username">Preferred username:</label>
      <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
         <label htmlFor="mobile">Mobile</label>
         <input
          type="tel"
          id='Mobile'
          name="mobile"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {errors.mobile && <span>{errors.mobile}</span>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  )}


export default App;