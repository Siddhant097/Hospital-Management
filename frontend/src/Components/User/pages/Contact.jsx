import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      contact,
    };
    const response = await axios.post('http://localhost:8080/patient/patientmessage', data);
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate("/");

    } else {
      toast.error(response.data.message);

    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");


  return (
    <Box py={4} sx={{ backgroundColor: '#ced3db' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1 }} />
              <Typography
  variant="body1"
  sx={{
    color: "blue"  // Correctly applied color using the sx prop
  }}
>
  Email: Siddhantmukund0628@gmail.com
</Typography>

            </Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1 }} />
              <Typography
  variant="body1"
  sx={{
    color: "blue"  // Correctly applied color using the sx prop
  }}
>
                Phone: +977-9862164447
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography
  variant="body1"
  sx={{
    color: "blue"  // Correctly applied color using the sx prop
  }}
>
                  Patna
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography
  variant="body1"
  sx={{
    color: "blue"  // Correctly applied color using the sx prop
  }}
>
                Kankarbagh
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Map
          </Typography>
          <Box height={400} mt={2}>
            {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baneshwor+(Bharosha%20Hospital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11324.854576167266!2d85.1399776!3d25.5940947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f45b3d5c35f4b1%3A0x72d43477958b597b!2zUGF0bmEsIE5hb2JhIEtpcmdlZCwgUGF0bmEsIE5lc3V0cmlh!5e1!3m2!1sen!2sin!4v1694709442420!5m2!1sen!2sin" width="850" height="400"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  fullWidth
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
