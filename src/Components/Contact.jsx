import React, { useState } from 'react';

const NewModal = ({ closePop }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleName(e) {
    if (/^[a-zA-Z ]*$/.test(e.target.value) || e.target.value === "") {
      setName(e.target.value);
      document.getElementById("invalidName").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("nname").style.borderColor = "#443C68";
      } else {
        document.getElementById("nname").style.borderColor = "green";
      }
    } else {
     
      document.getElementById("invalidName").style.visibility = "visible";
      document.getElementById("nname").style.borderColor = "red";
    }
  }

  function handleEmail(e) {
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setEmail(e.target.value);
      document.getElementById("invalidEmail").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("uname").style.borderColor = "#443C68";
      } else {
        document.getElementById("uname").style.borderColor = "green";
      }
    } else {
      setEmail("");
      document.getElementById("invalidEmail").style.visibility = "visible";
      document.getElementById("uname").style.borderColor = "red";
    }
  }

  return (
    <>
      <div className="modal-wrapper" onClick={closePop}></div>
      <div className="modal-contain">
        <div id="title-cont">
          <span>Contact </span>
          <span className="inline">Us</span>
        </div>
        <div className="inp_ut">
          <label>Name</label>
          <div>
            <input placeholder="Enter your name" id="nname"
          onClick={handleName}
          onChange={handleName} required />
          </div>
          <p className="valid" id="invalidName">
            Only alphabets are allowed.
          </p>
        </div>
        <div className="inp_ut">
          <label>Email</label>
          <div>
            <input placeholder="Enter your email" id="uname"
          onClick={handleEmail}
          onChange={handleEmail} required />
          </div>
          <p className="valid" id="invalidEmail">
            Enter valid email address.
          </p>
        </div>
        <div className="inp_ut">
          <label>Your Message</label>
          <div>
            <input placeholder="Enter your message" />
          </div>
        </div>
        <div id="btn-cont">
          <span id="btn-1" >Send</span>
          <span id="btn-2" onClick={closePop}>
            Cancel
          </span>
        </div>
      </div>
    </>
  );
};

export default NewModal;
