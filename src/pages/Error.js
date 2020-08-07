import React from "react";
import styled from "styled-components";

const StyledError = styled.section`
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    text-align: center;
    background: #fff;
    border-radius: 15px;
    padding: 15px 25px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.025);
      transition: 0.2s;
    }

    p:nth-of-type(2) {
      margin-top: 1rem;
    }

    a {
      text-decoration: none;
      background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  }
`;

const Error = () => {
  return (
    <StyledError className="site-container">
      <div className="container">
        <h1>404 not found</h1>
        <div className="flex box-error-page">
          <p>
            If you found this page, it can mean that it is not yet supported or
            you've entered the invalid URL. Please keep in mind that this is
            still not completed project.
          </p>
          <p>
            If you have any questions, simply contact with me{" "}
            <a href="mailto:me@bartzalewski.com">here</a>.
          </p>
        </div>
      </div>
    </StyledError>
  );
};

export default Error;
