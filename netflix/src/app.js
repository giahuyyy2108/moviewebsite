import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
