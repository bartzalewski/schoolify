import React, { useEffect } from "react";

const ChatView = (props) => {
  useEffect(() => {
    const container = document.getElementById("chatview-container");
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  });

  const { chat, user } = props;

  if (chat === undefined) {
    return <main></main>;
  } else {
    return (
      <div className="chat-right-view">
        <div>
          <div className="chat-header">
            Your conversation with{" "}
            <span>{chat.users.filter((_usr) => _usr !== user)[0]}</span>
          </div>
        </div>
        <main id="chatview-container">
          {chat.messages.map((_msg, _index) => {
            return (
              <div
                key={_index}
                className={_msg.sender === user ? "user-sent" : "friend-sent"}
              >
                {_msg.message}
              </div>
            );
          })}
        </main>
      </div>
    );
  }
};

export default ChatView;
