import React from "react";
import { Navigate } from "react-router-dom";

// automatically childeren bhi props ke thorugh pass ho rha hota h
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
