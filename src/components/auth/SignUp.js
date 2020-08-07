import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import avatar from "../../images/user.svg";
import capitalize from "capitalize-sentence";
import { moreWords } from "../filters/filters";
const Filter = require("bad-words");
const filter = new Filter();

const StyledSignUp = styled.div`
  width: 49%;
  height: fit-content;

  .signup-form {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userAvatar] = useState(`${avatar}`);
  const state = { email, password, firstName, lastName, userAvatar };

  const moderateMessage = (message) => {
    if (isShouting(message)) {
      message = stopShouting(message);
    }
    return capitalizeFirstLetter(message);
  };

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const isShouting = (message) => {
    return (
      message.replace(/[^A-Z]/g, "").length > message.length / 2 ||
      message.replace(/[^!]/g, "").length >= 3
    );
  };

  const stopShouting = (message) => {
    return capitalize(message.toLowerCase()).replace(/!+/g);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName(filter.clean(moderateMessage(firstName)));
    setLastName(filter.clean(moderateMessage(lastName)));

    if (firstName.includes("*") || lastName.includes("*")) {
      return null;
    } else {
      props.signUp(state);
    }
  };

  useEffect(() => {
    filter.addWords(...moreWords);
  });

  return (
    <StyledSignUp>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signup-title">sign up</h1>
        <div className="input-field">
          <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            aria-label="firstName"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            aria-label="lastName"
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            aria-label="email"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="password"
          />
        </div>
        <div className="input-field">
          <button className="btn">Sign Up</button>
        </div>
      </form>
    </StyledSignUp>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
