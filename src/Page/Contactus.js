import React, { useState } from 'react';
import axios from 'axios';
import './Contactus.css';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navi = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!firstName || !lastName || !email || !mobile || !message) {
      setError('All fields are required');
      return;
    }

    try {
      // Send data to the backend API
      const response = await axios.post('http://localhost:8080/api/contact', {
        firstName,
        lastName,
        email,
        mobile,
        message
      });

      if (response.status === 200) {
        setSuccess('Message sent successfully');
        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setMessage('');
        // Redirect or handle success as needed
        // navi('/success'); // Optional redirect on success
      }
    } catch (error) {
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Send Message</h1>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          id="mobile"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <textarea
          id="message"
          placeholder="Type Your Message Here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Send" id="button" />
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
}

export default ContactForm;