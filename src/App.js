import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import SignedIn from "../src/components/layout/SignedIn";
import SignedOut from "../src/components/layout/SignedOut";
import GlobalStyle from "../src/theme/globalStyle";

function App(props) {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

  return (
    <BrowserRouter>
      <GlobalStyle />
      {links}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(App);
