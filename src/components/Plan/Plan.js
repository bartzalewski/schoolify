import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { db } from "../../config/fbConfig";
import firebase from "../../config/fbConfig";
import PlanList from "./PlansList";

const StyledPlan = styled.aside`
  width: 20vw;
  height: calc(50% - 50px);
  padding: 25px;
  border-bottom: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  background: #fff;
  position: fixed;
  top: 100px;

  .title {
    font-size: 2rem;
    font-weight: 600;
    user-select: none;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .plan-item {
    background: #ff9800;
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
    top: 60px;
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
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

class Plan extends Component {
  state = {
    content: "",
    active: true,
    plan: [],
  };
  handleChange = async (e) => {
    await this.setState({
      content: e.target.value,
    });
  };
  addPlan = (e) => {
    e.preventDefault();
    db.collection("users")
      .where("email", "==", this.props.auth.email)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          db.collection("users")
            .doc(doc.id)
            .update({
              plan: firebase.firestore.FieldValue.arrayUnion(
                this.state.content
              ),
            });
        })
      );
    document.getElementById("input-plan").value = "";
  };
  removePlan = (e) => {
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
              plan: firebase.firestore.FieldValue.arrayRemove(
                e.target.innerText
              ),
            });
        })
      );
  };
  isHidden = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  componentDidMount() {
    db.collection("users")
      .where("email", "==", this.props.auth.email)
      .onSnapshot((snap) => {
        let changes = snap.docChanges();
        changes.forEach((change) => {
          const { plan } = change.doc.data();
          this.setState({
            plan: plan,
          });
        });
      });
    if (window.innerWidth >= 1124) {
      this.setState({
        active: false,
      });
    }
  }
  render() {
    return (
      <StyledPlan className="aside-plan">
        <div className="container">
          <h1 onClick={this.isHidden} className="title">
            Plans
          </h1>
          {!this.state.active ? (
            <form onSubmit={this.addPlan}>
              <input
                id="input-plan"
                type="text"
                placeholder="Add a plan"
                className="input-aside input-plan"
                autoComplete="off"
                onChange={this.handleChange}
              />
            </form>
          ) : null}
        </div>
        {!this.state.active ? (
          <PlanList
            plan={this.state.plan}
            removePlan={this.removePlan}
          ></PlanList>
        ) : null}
      </StyledPlan>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Plan);
