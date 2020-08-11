import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { db } from "../../config/fbConfig";
import firebase from "../../config/fbConfig";
import RemindersList from "./RemindersList";

const StyledReminders = styled.aside`
  width: 20vw;
  height: calc(50% - 50px);
  padding: 25px;
  border-bottom: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  background: #fff;
  position: fixed;
  top: 100px;

  .title {
    font-size: 2rem;
    font-weight: 600;
    user-select: none;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .reminders-item {
    background: #ff9800;
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
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Reminders = (props) => {
  const [content, setContent] = useState("");
  const [reminders, setReminders] = useState([]);
  const { email } = props.auth;

  const addReminder = (e) => {
    e.preventDefault();
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          db.collection("users")
            .doc(doc.id)
            .update({
              reminders: firebase.firestore.FieldValue.arrayUnion(content),
            });
        })
      );
    document.getElementById("input-reminder").value = "";
  };
  const removeReminder = (e) => {
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
              reminders: firebase.firestore.FieldValue.arrayRemove(
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
          const { reminders } = change.doc.data();
          setReminders(reminders);
        });
      });
  }, [email]);

  return (
    <StyledReminders className="aside-reminders">
      <div className="container">
        <h1 className="title">Reminders</h1>
        <form onSubmit={addReminder}>
          <input
            id="input-reminder"
            type="text"
            placeholder="Add a reminder"
            className="input-aside input-reminder"
            autoComplete="off"
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
      </div>
      <RemindersList
        reminders={reminders}
        removeReminder={removeReminder}
      ></RemindersList>
    </StyledReminders>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Reminders);
