import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledChatList = styled.div`
  .list-item {
    display: flex;
    background: white;
    border-radius: 10px;
    width: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 15px;
    margin-top: 0.25rem;
    transition: 0.2s;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      transition: 0.2s;
      background: #ececf0;
    }
  }

  .list-item-selected {
    background: #ececf0;
  }

  .list-item-avatar {
    width: 40px;
    height: 40px;
    background: #aaa;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-item-user {
    font-weight: 600;
    margin-left: 1rem;
  }

  .list-item-fragment {
    font-weight: 400;
  }

  .btn {
    border-radius: 10px;
    background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
    color: #fff;
    font-weight: 600;
    border: none;
    height: 50px;
    width: 95%;
    font-size: 1.125rem;
    cursor: pointer;
    padding: 10px 25px;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: none;
    }
  }

  @media (max-width: 1359px) {
    .list-item-user,
    .list-item-avatar {
      font-size: 0.8rem;
    }
    .list-item-avatar {
      width: 30px;
      height: 30px;
    }
    .btn {
      font-size: 0.8rem;
    }
  }
`;

const ChatList = (props) => {
  const newChat = () => {
    props.newChatBtnFn();
  };

  const selectChat = (index) => {
    props.selectChatFn(index);
  };

  const userIsSender = (chat) =>
    chat.messages[chat.messages.length - 1].sender === props.userEmail;

  if (props.chats.length > 0) {
    return (
      <StyledChatList>
        <button className="btn" onClick={newChat}>
          New Message
        </button>
        <div className="list">
          {props.chats.map((_chat, _index) => {
            return (
              <div key={_index}>
                <div
                  className={
                    props.selectedChatIndex === _index
                      ? "list-item-selected list-item"
                      : "list-item"
                  }
                  onClick={() => selectChat(_index)}
                >
                  <div id="list-item-avatar" className="list-item-avatar">
                    {
                      _chat.users
                        .filter((_user) => _user !== props.userEmail)[0]
                        .split("")[0]
                    }
                  </div>
                  <div className="list-item-user">
                    {
                      _chat.users.filter(
                        (_user) => _user !== props.userEmail
                      )[0]
                    }{" "}
                    {
                      <div className="list-item-fragment">
                        <span>
                          {_chat.messages[
                            _chat.messages.length - 1
                          ].message.substring(0, 30)}
                        </span>
                      </div>
                    }
                  </div>
                  {_chat.receiverHasRead === false && !userIsSender(_chat) ? (
                    <div className="list-item-icon">
                      <div className="notification-important"></div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </StyledChatList>
    );
  } else {
    return (
      <div>
        <button className="btn" onClick={newChat}>
          New Message
        </button>
        <div className="list"></div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ChatList);
