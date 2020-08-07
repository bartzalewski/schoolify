import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCredits = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;

  .flex {
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      fill: #fe843f;
      transition: 0.2s;
    }
  }
  h2 {
    font-size: 2rem;
    margin-left: 2rem;
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;

    &::selection {
      background: #fe843f;
      color: white;
      background-clip: initial;
      -webkit-text-fill-color: initial;
    }
  }

  .credits-bart-zalewski {
    background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;

export default function Credits() {
  return (
    <StyledCredits>
      <div className="flex">
        <Link to="/">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path d="M37.5814 17.6464C37.5132 17.6464 3.52549 17.6464 3.52549 17.6464L10.6862 9.62029C11.1506 9.09978 11.1051 8.30144 10.5846 7.83709C10.0642 7.37283 9.26571 7.41814 8.80136 7.93875L0.736724 16.9778C-0.245599 18.0792 -0.245501 19.7397 0.736821 20.8408L8.80146 29.8799C9.05106 30.1597 9.39686 30.3021 9.74423 30.3021C10.0434 30.3021 10.3437 30.1963 10.5847 29.9816C11.1052 29.5172 11.1506 28.7189 10.6863 28.1984L3.52559 20.1722C3.52559 20.1722 37.5132 20.1722 37.5815 20.1722C43.0364 20.1722 47.474 24.6101 47.474 30.0648C47.474 35.5195 43.0363 39.9574 37.5815 39.9574H31.5678C30.8703 39.9574 30.3048 40.5229 30.3048 41.2203C30.3048 41.9178 30.8703 42.4833 31.5678 42.4833H37.5815C44.4291 42.4833 50 36.9124 50 30.0648C49.9999 23.2172 44.429 17.6464 37.5814 17.6464Z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="50" height="50" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <h2>Credits</h2>
      </div>
      <br />
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.flaticon.com
        </a>
      </div>
      <br />
      <p>
        schoolify by{" "}
        <a
          className="credits-bart-zalewski"
          href="https://bartzalewski.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bart Zalewski
        </a>
        .
      </p>
    </StyledCredits>
  );
}
