import React from "react";
import styled from "styled-components";

const StyledRemindersList = styled.div``;

const RemindersList = ({ plan, removePlan }) => {
  const planList = plan.length ? (
    plan.map((reminder) => {
      return (
        <StyledRemindersList
          className="plan-item"
          key={reminder}
          onClick={removePlan}
        >
          {reminder}
        </StyledRemindersList>
      );
    })
  ) : (
    <span>You have no plan</span>
  );
  return <div id="plan-list">{planList}</div>;
};

export default RemindersList;
