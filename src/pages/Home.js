import React, { Component } from "react";
import styled from "styled-components";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import logo from "../images/logo.png";

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 3rem;
    user-select: none;
    background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1600px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .signup-title,
  .signin-title {
    font-size: 1.5rem;
    font-weight: 600;
    background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  input#email,
  input#password,
  input#firstName,
  input#lastName {
    width: 100%;
    height: 50px;
    font-size: 1.125rem;
    border: none;
    border-radius: 10px;
    background: #ececf0;

    @media (max-width: 1600px) {
      height: 40px;
    }
  }

  input#email:focus,
  input#password:focus,
  input#firstName:focus,
  input#lastName:focus {
    outline: none;
  }

  input {
    margin-top: 10px;
  }

  input,
  button {
    user-select: text;
  }

  input:focus {
    outline: 1px solid #fe843f;
  }

  .btn {
    border-radius: 10px;
    background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
    color: #fff;
    font-weight: 600;
    border: none;
    height: 50px;
    font-size: 1.125rem;
    cursor: pointer;
    padding: 10px 25px;
    margin-top: 20px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }

    @media (max-width: 1600px) {
      padding: 0px 25px;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.25rem;
    font-weight: 300;
  }

  .home-logo {
    width: 60px;
    height: 60px;
  }

  .sign-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .home-contact {
    align-self: flex-start;
    margin-top: 2rem;
    color: inherit;
    text-decoration: none;
    transition: 0.2s;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 1px;
      background: #fe843f;
      position: absolute;
      bottom: 0;
      transform: scaleX(0);
      transition: 0.2s ease-in-out;
    }

    &:hover {
      color: #fe843f;
      transition: 0.2s;

      &::before {
        transform: scaleX(1) !important;
      }
    }
  }

  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
  }

  @media (max-width: 1124px) {
    .title {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 2.3rem;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 25px;

    .sign-container {
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <div className="home-container">
          <img src={logo} className="home-logo" alt="schoolify logo" />
          <h1 className="title">schoolify</h1>
          <h2>Landing page in maintenance.</h2>
          <div className="sign-container">
            <SignUp />
            <SignIn />
          </div>
          <a href="mailto:me@bartzalewski.com" className="home-contact">
            Contact
          </a>
        </div>
      </StyledHome>
    );
  }
}

export default Home;
