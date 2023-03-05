// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//     password: '',
//     mobile: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/api/register', formData);
//       console.log(response.data);
//     } catch (error) {
//       if (error.response.status === 409) {
//         setErrors({ ...errors, username: 'Username already exists' });
//       } else {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         {errors.firstName && <p>{errors.firstName}</p>}
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         {errors.lastName && <p>{errors.lastName}</p>}
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p>{errors.email}</p>}
//       </div>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <p>{errors.username}</p>}
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p>{errors.password}</p>}
//       </div>
//       <div>
//         <label htmlFor="mobile">Mobile</label>
//         <input
//           type="tel"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//         />
//         {errors.mobile && <p>{errors.mobile}</p>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;
