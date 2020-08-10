import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";

export default function SignedOut() {
  return <Route path="/" component={Home} />;
}
