import React, { useState, HTMLAttributes } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { MAIL_SERVICE } from '../constants/api';

export type ContactContent = {
  heading: string;
  description: string[];
  cta: string;
  ctaLink: string;
  form: {
    heading: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    cta: string;
  }
}

type Props = {
  content: ContactContent;
} & HTMLAttributes<HTMLDivElement>;

function Contact(props: Props) {
  const { className='', content, ...restProps } = props;
  const { heading, description, cta, ctaLink, form } = content;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mailResponse, setMailResponse] = useState('');
  const [errorMailResponse, setErrorMailResponse] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setMailResponse('');
    setErrorMailResponse('');

    const mailData = {
      messageConfig: { firstname, lastname, email, message },
      sendConfig: { companyName: company, agent: 'noreply.jnpco.98@gmail.com', receiver: 'jnpco.98@gmail.com' }
    };

    try {
      const data = await fetch(MAIL_SERVICE, { method: 'POST', body: JSON.stringify(mailData) });
      const res = await data.json();
      if(res.error) throw new Error('');
      setMailResponse('Message sent.');
    } catch(e) {
      setErrorMailResponse('Something went wrong. Try again later');
    }
  }

  return(
    <section className={`c-contact ${className}`} {...restProps}>
      <div className="c-contact__introduction">
        <h2 className="c-contact__introduction-title">{heading}</h2>
        {description.map(desc => <p key={desc}>{desc}</p>)}
        <a className="c-contact__introduction-cta" href={ctaLink}>{cta}</a>
      </div>
      <div className="c-contact__divider" />
      <form className="c-contact__form" onSubmit={e => handleSubmit(e)}>
        <h2 className="c-contact__title">{form.heading}</h2>
        <p className={`c-contact__form-success${mailResponse && mailResponse.length ? ' is-active' : ''}`}>{mailResponse}</p>
        <p className={`c-contact__form-error${errorMailResponse && errorMailResponse.length ? ' is-active' : ''}`}>{errorMailResponse}</p>
        <input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder={form.firstNamePlaceholder} required/>
        <input value={lastname} onChange={e => setLastname(e.target.value)} placeholder={form.lastNamePlaceholder} required/>
        <input value={company} onChange={e => setCompany(e.target.value)} placeholder={form.companyPlaceholder} />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder={form.emailPlaceholder} required/>
        <TextareaAutosize value={message} onChange={e => setMessage(e.target.value)} placeholder={form.messagePlaceholder} minRows={5} required/>
        <button className="c-contact__form-cta o-btn" type="submit">{form.cta}</button>
      </form>
    </section>
  );
}

export default Contact;