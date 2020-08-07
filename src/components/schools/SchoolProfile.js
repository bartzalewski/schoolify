import React, { Component } from "react";
import styled from "styled-components";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const StyledSchoolProfile = styled.section`
  .school-profile-wrapper {
    margin-top: 2rem;
    background: #fff;
    padding: 25px;
    border-radius: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: calc(100vh - 100px - 39px - 32.5px - 32px - 48px);
    position: relative;
    overflow: hidden;

    .school-profile-header {
      padding: 25px;
      background: #ececf0;
      border-radius: 15px;
      height: 200px;
      width: 100%;
    }

    h2 {
      margin: 0;
      font-weight: 600;
      font-size: 1.125rem;
    }
  }
`;

class SchoolProfile extends Component {
  render() {
    return (
      <StyledSchoolProfile className="site-container">
        <div className="container">
          <h1>School Profile</h1>
          <section className="school-profile-wrapper" style={{}}>
            <header className="school-profile-header">
              <img src="" alt="school logo" />
              <h2>LO im. Władysława Jagiełły w Ząbkowicach Śląskich</h2>
            </header>
          </section>
        </div>
      </StyledSchoolProfile>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.firestore.ordered.schools,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "schools" }])
)(SchoolProfile);
