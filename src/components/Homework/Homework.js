import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { db } from "../../config/fbConfig";
import firebase from "../../config/fbConfig";
import HomeworkList from "./HomeworkList";

const StyledHomework = styled.aside`
  width: 20vw;
  height: calc(50% - 50px);
  padding: 25px;
  border-left: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  position: fixed;
  background: #fff;
  top: 100px;
  right: 0;

  .title {
    font-size: 2rem;
    font-weight: 600;
    user-select: none;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .input-homework {
    width: 135px;
  }

  .homework-item {
    background: #4caf50;
    color: #fff;
    border-radius: 10px;
    padding: 5px 15px;
    margin-top: 5px;
    width: fit-content;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }

    @media (max-width: 1359px) {
      padding: 2.5px 10px;
    }

    @media (max-width: 1124px) {
      margin: 5px auto;
    }
  }

  @media (max-width: 1359px) {
    top: 60px;
    padding: 12.5px;
    height: calc(50% - 30px);

    .title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1124px) {
    position: static;
    top: 0px;
    width: 100%;
    border: none;
    text-align: center;
    border-bottom: 1px solid #d2d2d2;
    padding: 3.375px;

    .container {
      flex-direction: column;
    }

    .title {
      font-size: 1rem;
    }
  }
`;

const Homework = (props) => {
  const [content, setContent] = useState("");
  const [homework, setHomework] = useState([]);
  const { email } = props.auth;

  const addHomework = (e) => {
    e.preventDefault();
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          db.collection("users")
            .doc(doc.id)
            .update({
              homework: firebase.firestore.FieldValue.arrayUnion(content),
            });
        })
      );
    document.getElementById("input-homework").value = "";
  };

  const removeHomework = (e) => {
    e.preventDefault();
    e.persist();
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          db.collection("users")
            .doc(doc.id)
            .update({
              homework: firebase.firestore.FieldValue.arrayRemove(
                e.target.innerText
              ),
            });
        })
      );
  };

  useEffect(() => {
    db.collection("users")
      .where("email", "==", email)
      .onSnapshot((snap) => {
        let changes = snap.docChanges();
        changes.forEach((change) => {
          const { homework } = change.doc.data();
          setHomework(homework);
        });
      });
  }, [email]);

  return (
    <StyledHomework className="aside-homework">
      <div className="container">
        <h1 className="title">Homework</h1>
        <form onSubmit={addHomework}>
          <input
            id="input-homework"
            type="text"
            placeholder="Add a homework"
            className="input-aside input-homework"
            autoComplete="off"
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
      </div>
      <HomeworkList
        homework={homework}
        removeHomework={removeHomework}
      ></HomeworkList>
    </StyledHomework>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Homework);
