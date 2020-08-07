import React, { Component } from "react";
import styled from "styled-components";
import plans from "../images/plans.svg";
import classes from "../images/classes.svg";
import school from "../images/school.svg";
import posts from "../images/posts.svg";
import { Link } from "react-router-dom";
import { db } from "../config/fbConfig";

const StyledTeacherPanel = styled.section`
  a {
    text-decoration: none;
    color: inherit;
  }

  .teacher-panel-bio {
    margin: 2rem 0;
  }

  .teacher-panel-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
  }

  .teacher-panel-text {
    background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;

    &::selection {
      -webkit-background-clip: initial;
      background-clip: initial;
      -webkit-text-fill-color: initial;
      color: white;
    }
  }

  .box {
    width: 100%;
    height: 150px;
    border-radius: 15px;
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    transition: 0.2s;

    img,
    p {
      user-select: none;
    }

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
`;

class TeacherPanel extends Component {
  state = {
    schoolName: "",
  };
  render() {
    const profile = this.props.profile;
    db.collection("schools")
      .where("schoolId", "==", `${this.props.profile.schoolId}`)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          const schoolName = doc.data().schoolName;
          this.setState({
            schoolName: schoolName,
          });
        })
      );
    return (
      <StyledTeacherPanel className="site-container">
        <div className="container">
          <h1>Teacher Panel</h1>
          <div className="teacher-panel-bio">
            <p>
              Your name:{" "}
              <span className="teacher-panel-text">
                {profile.firstName} {profile.lastName}
              </span>
            </p>
            <p>
              Your school:{" "}
              <span className="teacher-panel-text">
                {this.state.schoolName}
              </span>
            </p>
            <p>
              Current lesson:{" "}
              <span className="teacher-panel-text">
                {profile.currentLesson ? profile.currentLesson : "none"}
              </span>
            </p>
          </div>
          <div className="teacher-panel-wrapper">
            <Link to="/" className="box">
              <img src={plans} alt="plans" />
              <p>Plans</p>
            </Link>
            <Link to="/" className="box">
              <img src={classes} alt="classes" />
              <p>Classes</p>
            </Link>
            <Link to="/" className="box">
              <img src={school} alt="school" />
              <p>School</p>
            </Link>
            <Link to="/" className="box">
              <img src={posts} alt="posts" />
              <p>Posts</p>
            </Link>
          </div>
        </div>
      </StyledTeacherPanel>
    );
  }
}

export default TeacherPanel;
