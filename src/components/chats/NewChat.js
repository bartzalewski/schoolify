import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../../config/fbConfig";

const StyledNewChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NewChat = (props) => {
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState(null);

  const userTyping = (type, e) => {
    switch (type) {
      case "username":
        setUsername(e.target.value);
        break;

      case "message":
        setMessage(e.target.value);
        break;

      default:
        break;
    }
  };

  const chatExists = async () => {
    const docKey = buildDocKey();
    const chat = await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .get();
    return chat.exists;
  };

  const userExists = async () => {
    const usersSnapshot = await firebase.firestore().collection("users").get();
    const exists = usersSnapshot.docs
      .map((_doc) => _doc.data().email)
      .includes(username);
    return exists;
  };

  const submitNewChat = async (e) => {
    e.preventDefault();
    if (userExists) {
      chatExists ? goToChat() : createChat();
    }
  };

  const createChat = () => {
    props.newChatSubmitFn({
      sendTo: username,
      message: message,
    });
  };

  const goToChat = () => props.goToChatFn(buildDocKey(), message);

  const buildDocKey = () => {
    return [firebase.auth().currentUser.email, username].sort().join(":");
  };

  return (
    <StyledNewChat>
      <h3 className="btn new-chat-title">Send a message!</h3>
      <form onSubmit={(e) => submitNewChat(e)}>
        <label>
          <input
            id="chat-input-email"
            type="text"
            autoComplete="off"
            onChange={(e) => userTyping("username", e)}
            placeholder="Your friend's email"
          />
        </label>
        <label>
          <input
            id="chat-input-msg"
            type="text"
            autoComplete="off"
            onChange={(e) => userTyping("message", e)}
            placeholder="Your message"
          />
        </label>
        <button className="btn btn-chat-submit" type="submit">
          Submit
        </button>
      </form>
    </StyledNewChat>
  );
};

export default NewChat;
