import React from "react";
import styled from "styled-components";

const StyledPlanList = styled.div``;

const PlanList = ({ plan, removePlan }) => {
  const planList = plan.length ? (
    plan.map((plan) => {
      return (
        <StyledPlanList className="plan-item" key={plan} onClick={removePlan}>
          {plan}
        </StyledPlanList>
      );
    })
  ) : (
    <span>You have no plan</span>
  );
  return <div id="plan-list">{planList}</div>;
};

export default PlanList;
