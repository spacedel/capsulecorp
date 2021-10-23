import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "u4UizlgX";

const Form = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, message });
    alert("Processed. Have a seat. We'll be with you shortly...");
  };

  return (
    <form onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="field-name" name="name" placeholder="Name" required="" />
                
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="field-email" name="email" placeholder="Email" required="" />
        
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='field-message' name='message' placeholder='Message' required=""/>
        
        <button type="submit" className='contact-submit' disabled={submitting}>Send</button>
    </form>
  );
};

export default Form;