import React from "react";
import styled from "styled-components";
import SchoolList from "./SchoolList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const StyledViewSchools = styled.div``;

const ViewSchools = (props) => {
  const { schools } = props;
  return (
    <StyledViewSchools className="school-list-page site-container">
      <div className="container">
        <h1>School list</h1>
        <SchoolList schools={schools} />
      </div>
    </StyledViewSchools>
  );
};

const mapStateToProps = (state) => {
  return {
    schools: state.firestore.ordered.schools,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "schools", orderBy: ["createdAt", "desc"] }])
)(ViewSchools);
