import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { db } from "../../config/fbConfig";
import firebase from "../../config/fbConfig";
import TestsList from "./TestsList";

const StyledTests = styled.aside`
  width: 20vw;
  height: calc(50% - 50px);
  padding: 25px;
  border-left: 1px solid #d2d2d2;
  background: #fff;
  position: fixed;
  bottom: 0;
  right: 0;

  .title {
    font-size: 2rem;
    font-weight: 600;
    user-select: none;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .input-tests {
    width: 90px;
  }

  .tests-item {
    background: #f44336;
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

class Tests extends Component {
  state = {
    content: "",
    tests: [],
  };
  handleChange = async (e) => {
    await this.setState({
      content: e.target.value,
    });
  };
  addTest = (e) => {
    e.preventDefault();
    db.collection("users")
      .where("email", "==", this.props.auth.email)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          db.collection("users")
            .doc(doc.id)
            .update({
              tests: firebase.firestore.FieldValue.arrayUnion(
                this.state.content
              ),
            });
        })
      );
    document.getElementById("input-tests").value = "";
  };
  removeTest = (e) => {
    e.preventDefault();
    e.persist();
    db.collection("users")
      .where("email", "==", this.props.auth.email)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          db.collection("users")
            .doc(doc.id)
            .update({
              tests: firebase.firestore.FieldValue.arrayRemove(
                e.target.innerText
              ),
            });
        })
      );
  };
  componentDidMount() {
    db.collection("users")
      .where("email", "==", this.props.auth.email)
      .onSnapshot((snap) => {
        let changes = snap.docChanges();
        changes.forEach((change) => {
          const { tests } = change.doc.data();
          this.setState({
            tests: tests,
          });
        });
      });
  }
  render() {
    return (
      <StyledTests className="aside-tests">
        <div className="container">
          <h1 className="title">Tests</h1>
          <form onSubmit={this.addTest}>
            <input
              id="input-tests"
              type="text"
              placeholder="Add a test"
              className="input-aside input-tests"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </form>
        </div>
        <TestsList
          tests={this.state.tests}
          removeTest={this.removeTest}
        ></TestsList>
      </StyledTests>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Tests);
