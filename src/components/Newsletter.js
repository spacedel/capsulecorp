import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "TPZMLVBP";

const Newsletter = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [email, setEmail] = useState("");
  

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ email });
    alert("You have joined the list!");
  };

  return (
    <form onSubmit={onSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="newsletter-email" name="email" placeholder="Email" required=""></input>
        <button type="submit" className='newsletter-submit' disabled={submitting}>Send</button>
    </form>
  );
};

export default Newsletter;