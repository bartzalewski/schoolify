import React from "react";
import styled from "styled-components";
import moment from "moment";

const StyledNotification = styled.section`
  ul {
    list-style-type: none;
    margin: 2rem 0;
  }

  li {
    background: white;
    border-radius: 15px;
    margin-top: 0.5rem;
    padding: 15px 25px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }

  .notification-user {
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

  .notification-time {
    color: #9b9b9b;
  }

  @media (max-width: 452px) {
    .notification-user,
    .notification-time,
    span {
      font-size: 0.9rem;
    }
  }
`;

const ViewNotification = (props) => {
  const { notifications } = props;
  return (
    <StyledNotification className="site-container">
      <div className="container">
        <h1>Notifications</h1>
        <ul>
          {notifications &&
            notifications.map((item) => {
              return (
                <li className="notification-item" key={item.id}>
                  <span className="notification-user">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="notification-time">
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </StyledNotification>
  );
};

export default ViewNotification;
