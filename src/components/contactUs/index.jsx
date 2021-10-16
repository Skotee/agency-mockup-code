import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "../../components/button";

function CountactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    const isSubjectValid = subject !== "";

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.");
    }
    if (!isSubjectValid) {
      errors.push("Subject is not valid, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      alert("Email Sent");
    }
  };

  return (
    <div className="container">
      <div className="outerFormContainer">
        <div className="innerFormContainer">
          <h2> Get in touch </h2>
          <form>
            <TextField
              label="Your name"
              type="text"
              variant="outlined"
              onChange={e => setName(e.target.value)}
            />
            <TextField
              label="Your email"
              type="email"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Your company"
              type="text"
              variant="outlined"
              onChange={e => setSubject(e.target.value)}
            />
            <TextField
              label="Message"
              type="text"
              variant="outlined"
              multiline
              rowsMax="3"
              onChange={e => setMessage(e.target.value)}
            />
            {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul key={index}>{item}</ul>;
                })
              : null}
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={formValidation}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CountactUs;
