import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={userName}
            name="userName"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Contact;
