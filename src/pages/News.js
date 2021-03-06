import React from "react";
import styled from "styled-components";
import { ReactComponent as Add } from "../images/add.svg";
import warning from "../images/warning.svg";
import PostList from "../components/posts/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import SchoolList from "../components/schools/SchoolList";

const StyledNews = styled.section`
  height: fit-content;

  .schools-title {
    font-size: 1.625rem;
    font-weight: 600;
    user-select: none;
  }

  .school-list {
    font-size: 1.2rem;
    color: #fe843f;
    font-weight: 400;
    text-decoration: none;
    transition: 0.2s;
    user-select: none;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }

  .home-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .box {
    width: 19.5%;
    height: 200px;
    background-color: white;
    border-radius: 15px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }

    @media (max-width: 813px) {
      height: 100px;
    }
  }

  .newspage-schools-container {
    width: 100%;
    height: 200px;
    margin-top: 2rem;

    #school-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 5px;
      margin-top: 0;
      margin-right: 5px;
    }

    .box {
      width: 100%;
    }

    .box-add {
      width: 24.35%;
    }

    @media (max-width: 813px) {
      height: 100px;
    }
  }

  .school-bg {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    user-select: none;
    object-fit: cover;

    @media (max-width: 813px) {
      height: 100px;
    }
  }

  .school-logo {
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 100px;
    margin: 0.5em;
    user-select: none;
  }

  .add {
    width: 75px;
    height: 75px;
    margin-top: 2rem;
  }

  .box-add {
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .add-title {
    font-size: 1.125rem;
    font-weight: 600;
    user-select: none;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .add-post,
  .posts-list {
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-radius: 15px;
    margin-top: 3rem;
    padding: 25px;
  }

  .posts-btn {
    background: #ececf0;
    border-radius: 15px;
    margin: 0;
    height: 50px;
    width: 75%;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: 0.2s;

    &:hover {
      transform: scale(1.025);
      transition: 0.2s;
    }
  }

  .posts-wrapper {
    margin-top: -80px;
  }

  .posts-list {
    height: fit-content;
    display: block;
    padding: 25px;

    &:nth-of-type(1) {
      margin-top: 1rem;
    }
  }

  .posts-logo {
    margin: 0;
  }

  .posts-title {
    margin-left: 3.5rem;
    font-size: 1.1875rem;
    line-height: 1.25;
    text-align: justify;
  }

  .posts-time {
    position: absolute;
    margin-left: 3.5rem;
    font-size: 1.0625rem;
    color: #9b9b9b;
    line-height: 1.25;
    text-align: justify;
  }

  .posts-desc {
    margin-top: 3rem;
    text-align: justify;
    font-size: 18px;
    line-height: 1.25;
  }

  .posts-img {
    width: 100%;
    margin-top: 1rem;
  }

  .user-logo,
  .profile-btn {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }

  .profile-btn {
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      box-shadow: 0 0 0 2pt #fe843f;

      @media (max-width: 1359px) {
        box-shadow: 0 0 0 1pt #fe843f;
      }
    }
  }

  .newspage-schools-container-teacher {
    display: flex;
    justify-content: space-between;
    #school-list {
      grid-template-columns: repeat(4, 1fr);
      div {
        &:nth-of-type(5) {
          display: none !important;
        }
      }
    }
  }

  .newspage-schools-container-student {
    margin-bottom: 2.5rem;

    @media (max-width: 1359px) {
      margin-bottom: 0;
    }
  }

  #school-list-news {
    display: none !important;
  }

  @media (max-width: 1359px) {
    .container {
      padding: 0 !important;
    }

    .schools-title {
      padding-top: 20px;
    }

    .school-list {
      padding-top: 20px;
    }

    .add-post {
      margin-top: 1.5rem;
    }

    .posts-list {
      margin-top: 1.5rem;
    }

    .posts-btn {
      width: 70%;
    }
  }

  @media (max-width: 1124px) {
    .posts-btn {
      width: 75%;
    }
  }

  @media (max-width: 813px) {
    .schools-title {
      padding-left: 10px;
      padding-top: 10px;
      font-size: 1.2rem;
    }

    .newspage-schools-container {
      padding: 0 10px;
    }

    .school-list {
      padding-right: 10px;
      padding-top: 10px;
      font-size: 1rem;
    }

    .wrapper {
      padding: 10px;
    }

    .add-post {
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .posts-list {
      width: 100%;
      margin-top: 1rem;
    }

    .posts-title,
    .posts-time {
      margin-left: 2.25rem;
    }

    .add {
      width: 30px;
      height: 30px;
      margin: 0;
    }

    .school-logo {
      width: 30px;
      height: 30px;
    }

    .user-logo,
    .profile-btn {
      width: 30px;
      height: 30px;
    }

    .add-title {
      font-size: 0.9rem;
    }

    .posts-btn {
      height: 40px;
    }
  }

  @media (max-width: 478px) {
    .posts-title {
      font-size: 0.9rem;
    }
    .posts-time {
      font-size: 0.9rem;
    }
    .posts-desc {
      font-size: 0.8rem;
    }
    .posts-btn {
      font-size: 0.9rem;
      width: 70%;
      height: 30px;
      border-radius: 10px;
    }
    .add-title {
      font-size: 0.75rem;
    }
  }
`;

const News = (props) => {
  const { posts, auth, schools, profile } = props;
  if (!auth.uid) return <Redirect to="/" />;
  if (profile.accountType === "teacher") {
    return (
      <StyledNews className="site-container">
        <div className="container newspage-teacher-container">
          <div className="home-wrapper">
            <h1 id="schools-title" className="schools-title">
              Browse schools
            </h1>
            <Link to="/school-list" className="school-list">
              See All
            </Link>
          </div>
          <div className="newspage-schools-container newspage-schools-container-teacher">
            <SchoolList id="school-list-news" schools={schools} />
            <Link to="/add" className="box box-add">
              <div className="box-wrapper">
                <h1 className="add-title">Add your school!</h1>
                <Add className="add" />
              </div>
            </Link>
          </div>
          <div className="wrapper">
            <div className="add-post">
              <Link to="/profile" className="profile-btn">
                <img className="user-logo" src={profile.userAvatar} alt="" />
              </Link>
              <Link to="/create" className="posts-btn">
                Add a post
              </Link>
              <img className="user-logo" src={warning} alt="post info" />
            </div>
          </div>
          <PostList posts={posts} />
        </div>
      </StyledNews>
    );
  } else {
    return (
      <StyledNews className="site-container">
        <div className="container">
          <div className="home-wrapper">
            <h1 id="schools-title" className="schools-title">
              Browse schools
            </h1>
            <Link to="/school-list" className="school-list">
              See All
            </Link>
          </div>
          <div className="newspage-schools-container newspage-schools-container-student">
            <SchoolList schools={schools} />
          </div>
          <PostList posts={posts} />
        </div>
      </StyledNews>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    schools: state.firestore.ordered.schools,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts", limit: 20, orderBy: ["createdAt", "desc"] },
    { collection: "schools", limit: 5, orderBy: ["createdAt", "desc"] },
  ])
)(News);
