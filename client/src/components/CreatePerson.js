import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import {  Grid, Typography, TextField, Button, Box, Paper } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@mui/material';
import axios from 'axios';

// const URL = process.env.REACT_APP_URL;

const CreatePerson = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: '',
    age: '',
    contact_number: '',
    weight: '',
    BMI: '',
  });

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  axios.defaults.baseURL = `https://3000-14padu-diettracker-vye23yp7ujn.ws-us117.gitpod.io/api/Person`;

  const onSubmit = (e) => {
    e.preventDefault();

  if (!person.name || !person.age || !person.contact_number || !person.weight || !person.BMI) {
    toast.error('Please fill all the fields!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
    return;
  }
  
    axios
      .post(`https://3000-14padu-diettracker-vye23yp7ujn.ws-us117.gitpod.io/api/Person`, person)
      .then(() => {
        setPerson({
          name: '',
          age: '',
          contact_number: '',
          weight: '',
          BMI: '',
        });

        toast.success('Person added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch((err) => {
        console.log('Error in CreatePerson!');
        console.log('The error is -> ', err);

        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <ToastContainer theme="dark" />
      <Paper elevation={3} sx={{ p: 4, backgroundColor: 'background.paper', color: 'text.primary' }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Add Person
        </Typography>
        <Typography variant="body1" textAlign="center" mb={3} color="text.secondary">
          Fill in the details to create a new person.
        </Typography>

        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={person.name}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                variant="outlined"
                type="number"
                value={person.age}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Weight"
                name="weight"
                variant="outlined"
                type="number"
                value={person.weight}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="BMI"
                name="BMI"
                variant="outlined"
                type="number"
                value={person.BMI}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contact_number"
                variant="outlined"
                type="tel"
                value={person.contact_number}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  color="secondary"
                >
                  Back to List
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreatePerson;