import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function Contact() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(firstname, lastname, email, message);
  }

  return(
    <section className="c-contact">
      <h2 className="c-contact__title">Contact me</h2>
      <form className="c-contact__form" onSubmit={e => handleSubmit(e)}>
        <input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="First name" />
        <input value={lastname} onChange={e => setLastname(e.target.value)} placeholder="Last name" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <TextareaAutosize value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" minRows={5} />
        <button className="c-contact__form-cta o-btn" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;