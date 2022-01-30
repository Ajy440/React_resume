import React from "react";
import { Link } from "react-router-dom";

const welcome = () => {
  return (
    <div>
      Welcome
      <Link to="/admin">Admin</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
};

export default welcome;
