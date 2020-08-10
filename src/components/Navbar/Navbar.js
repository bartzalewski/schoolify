import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import firebase from "../../config/fbConfig";
import { ReactComponent as HomeSVG } from "../../images/home.svg";
import { ReactComponent as NotificationsSVG } from "../../images/notifications.svg";
import { ReactComponent as LessonsSVG } from "../../images/lessons.svg";
import { ReactComponent as ChatSVG } from "../../images/chat.svg";
import { ReactComponent as MoreSVG } from "../../images/more.svg";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100px;
  border-bottom: 1px solid #d2d2d2;
  position: fixed;
  background: #fff;
  z-index: 3;

  .active {
    svg {
      fill: #fe843f;
    }

    img {
      box-shadow: 0 0 0 2pt #fe843f;

      @media (max-width: 1359px) {
        box-shadow: 0 0 0 1pt #fe843f;
      }
    }

    &::before {
      transform: scaleX(1) !important;
    }

    span {
      color: #fe843f;
    }
  }

  .left,
  .center,
  .right {
    display: flex;
    align-items: center;
    margin: 25px;

    @media (max-width: 1359px) {
      margin: 12.5px;
    }
  }

  .left {
    text-decoration: none;

    a {
      display: flex;
    }
  }

  .left,
  .right {
    width: 20vw;
  }

  .center {
    width: 680px;
    justify-content: space-between;

    @media (max-width: 1124px) {
      margin: 0;
    }
  }

  .right {
    justify-content: flex-end;
  }

  .title {
    font-weight: 300;
    font-size: 2.5rem;
    margin: 25px;
    background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;

    @media (max-width: 1359px) {
      font-size: 2rem;
      margin: 12.5px;
    }

    @media (max-width: 1124px) {
      display: none;
    }
  }

  .box {
    width: 20%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.2s;
    color: #293347;
    flex-direction: column;
    text-decoration: none;
    position: relative;

    &:hover {
      svg {
        fill: #fe843f;
        transition: 0.2s;
      }
      span {
        color: #fe843f;
        transition: 0.2s;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background: #fe843f;
      position: absolute;
      bottom: 0;
      transform: scaleX(0);
      transition: 0.2s ease-in-out;

      @media (max-width: 1359px) {
        height: 1px;
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      transition: 0.2s;
      object-fit: contain;

      @media (max-width: 1359px) {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 1359px) {
      height: 60px;

      span {
        font-size: 14px;
      }
    }

    @media (max-width: 1124px) {
      span {
        display: none;
      }
    }
  }

  .nav-more {
    width: 100px;
  }

  .avatar {
    &:hover {
      img {
        box-shadow: 0 0 0 2pt #fe843f;
        transition: 0.2s;

        @media (max-width: 1359px) {
          box-shadow: 0 0 0 1pt #fe843f;
        }
      }
    }
  }

  .schoolify-logo {
    transition: 0.2s;
    width: 40px;
    height: 40px;
    box-shadow: none !important;

    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }

  svg {
    transition: 0.2s;
    fill: #293347;
  }

  svg,
  img {
    @media (max-width: 1359px) {
      width: 30px !important;
      height: 30px !important;
    }
  }

  @media (max-width: 1359px) {
    height: 60px;
  }

  @media (max-width: 1124px) {
    top: 0px;
    .left,
    .right {
      width: 10vw;
    }
    .center {
      width: 80vw;
      justify-content: space-evenly;
    }
  }
`;

export default function Navbar(props) {
  return (
    <StyledNavbar>
      <div className="left">
        <NavLink exact to="/">
          <img src={logo} className="schoolify-logo" alt="schoolify logo" />
        </NavLink>
        <p className="title">schoolify</p>
      </div>
      <div className="center">
        <NavLink
          exact
          activeClassName="active"
          to="/"
          className="box nav-home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <HomeSVG />
          <span>Home</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/notifications"
          className="box nav-notifications"
        >
          <NotificationsSVG />
          <span>Notifications</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/profile"
          className="box nav-profile avatar"
        >
          <img
            src={
              props.profile.userAvatar || firebase.auth().currentUser.photoURL
            }
            alt=""
          />
          <span>Profile</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/lessons"
          className="box nav-lessons"
        >
          <LessonsSVG />
          <span>Lessons</span>
        </NavLink>
        <NavLink activeClassName="active" to="/chat" className="box nav-chat">
          <ChatSVG />
          <span>Chat</span>
        </NavLink>
      </div>
      <div className="right">
        <NavLink activeClassName="active" to="/more" className="box nav-more">
          <MoreSVG />
          <span>More</span>
        </NavLink>
      </div>
    </StyledNavbar>
  );
}
