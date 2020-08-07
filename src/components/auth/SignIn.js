import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import firebase from "../../config/fbConfig";

const StyledSignIn = styled.section`
  width: 49%;
  height: fit-content;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { authError } = props;
  const state = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(state);
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      setIsSignedIn(!!isSignedIn);
    });
  });

  return (
    <StyledSignIn>
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1 className="signin-title">sign in</h1>
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
          <button className="btn">Login</button>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </div>
      </form>
    </StyledSignIn>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
