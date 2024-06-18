import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'userName') {
      setUserName(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Form submitted with email:', email, 'and username:', userName);
    // Optionally clear form inputs
    setEmail('');
    setUserName('');
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
      />
      <input
        value={userName}
        name="userName"
        onChange={handleInputChange}
        type="text"
        placeholder="Username"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
