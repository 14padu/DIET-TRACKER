import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import axios from 'axios';

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('mongodb+srv://diet_tracker_admin:diet_tracker_admin@diet-tracker.jsni9.mongodb.net/?retryWrites=true&w=majority&appName=diet-tracker/api/Persons', person); // Use relative URL for better portability
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

      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
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
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <ToastContainer theme="dark" />
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Add Person
        </Typography>
        <Typography variant="body1" textAlign="center" mb={3} color="text.secondary">
          Fill in the details to create a new person.
        </Typography>

        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Age', name: 'age', type: 'number' },
              { label: 'Weight', name: 'weight', type: 'number' },
              { label: 'BMI', name: 'BMI', type: 'number' },
              { label: 'Contact Number', name: 'contact_number', type: 'tel' },
            ].map((field) => (
              <Grid item xs={12} key={field.name}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  variant="outlined"
                  type={field.type}
                  value={person[field.name]}
                  onChange={onChange}
                  required
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <Button component={Link} to="/" variant="outlined" color="secondary">
                  Back to List
                </Button>
                <Button type="submit" variant="contained" color="primary">
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
