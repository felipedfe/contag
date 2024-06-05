import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Felipe dfe',
      message: message,
    }

    emailjs.send('service_3elx9h7', 'template_ssmksap', templateParams, 'xxn17sepV_sZWujiK')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  useEffect(() => {
    console.log(email);
    console.log(message);
    console.log(name);
  }, [email, message, name]);

  return (
    <form onSubmit={sendEmail} style={{ padding: '5rem 0' }}>
       <label>
        Nome:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
