import React from "react";
import styled from "styled-components";

const StyledRemindersList = styled.div``;

const RemindersList = ({ reminders, removeReminder }) => {
  const remindersList = reminders.length ? (
    reminders.map((reminder) => {
      return (
        <StyledRemindersList
          className="reminders-item"
          key={reminder}
          onClick={removeReminder}
        >
          {reminder}
        </StyledRemindersList>
      );
    })
  ) : (
    <span>You have no reminders</span>
  );
  return <div id="reminders-list">{remindersList}</div>;
};

export default RemindersList;
