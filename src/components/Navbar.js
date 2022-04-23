/* eslint-disable react/style-prop-object */

/* eslint-disable react/no-typos */

import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
      </div>
    </nav>
  );
}
Navbar.PropTypes = { title: PropTypes.string, aboutText: PropTypes.string };

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About",
};
