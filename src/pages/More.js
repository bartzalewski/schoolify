import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import dark from "../images/dark.svg";
import teacher from "../images/teacher.svg";

const StyledMore = styled.section`
  .btn-toggle-theme {
    font-size: 0.9rem !important;
  }

  .btn {
    border-radius: 10px;
    background: #ff9800;
    color: #fff;
    font-weight: 600;
    border: none;
    height: 50px;
    width: fit-content;
    font-size: 1.125rem;
    cursor: pointer;
    padding: 10px 25px;
  }

  .btn-logout {
    transition: 0.2s;
    position: absolute;
    margin-bottom: 2rem;
    background: -webkit-linear-gradient(left, #fe843f, #fc5a37);

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }

  .settings-box {
    background: #fff;
    padding: 15px 25px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    span {
      margin-left: 1rem;
    }
  }

  .settings-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    margin-top: 2rem;
    width: fit-content;
  }

  @media (max-width: 452px) {
    .btn-toggle-theme,
    .left span {
      font-size: 0.8rem !important;
    }
  }
`;

const More = (props) => {
  return (
    <StyledMore className="site-container">
      <div className="container">
        <h1>More</h1>
        <div className="settings-wrapper">
          {props.profile.accountType === "teacher" ? (
            <div className="settings-box">
              <div className="left">
                <img src={teacher} alt="toggle dark theme icon" />
                <span>Teacher Panel</span>
              </div>
              <div className="right">
                <Link to="/panel">
                  <button className="btn btn-toggle-theme">Open</button>
                </Link>
              </div>
            </div>
          ) : null}
          <div className="settings-box">
            <div className="left">
              <img src={dark} alt="toggle dark theme icon" />
              <span>Dark Theme</span>
            </div>
            <div className="right">
              <button
                className="btn btn-toggle-theme"
                onClick={() =>
                  props.theme.mode === "light"
                    ? props.onChange("dark")
                    : props.onChange("light")
                }
              >
                Change
              </button>
            </div>
          </div>
          <Link to="/">
            <span onClick={props.signOut} className="btn btn-logout">
              Log Out
            </span>
          </Link>
        </div>
      </div>
    </StyledMore>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(More);
