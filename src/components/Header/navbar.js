import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div
      id="navbar"
      className="h-14 bg-gradient-to-t from-no1-color/75 to-no2-color/75 relative flex justify-center items-center"
    >
      <div id="navbar-link" className="">
        <div id="navbar-list-link" className="flex flex-nowrap justify-center items-center">
          <Link to="/" className="text-white mx-5 ">
            Homepage
          </Link>
          <Link to="/knowledge" className="text-white mx-5 ">
            Knowledge
          </Link>
          <div className="">
            <img
              className="h-16 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <Link to="/about" className="text-white mx-5 ">
            About
          </Link>
          <Link to="/project" className="text-white mx-5 ">
            Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default navbar;
