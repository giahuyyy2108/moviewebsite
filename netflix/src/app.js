import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
