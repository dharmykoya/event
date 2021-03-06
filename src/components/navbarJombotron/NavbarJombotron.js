import React from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";
import "./NavbarJombotron.css";

const NavbarJombotron = (props) => {
  const { headerTitle, headerDescription } = props;
  return (
    <header className="navbar-container">
      <Navbar />
      <section className="jombotron-text">
        <h1 className="font-bold">{headerTitle}</h1>
        <p>{headerDescription}</p>
      </section>
    </header>
  );
};

NavbarJombotron.propTypes = {};

export default NavbarJombotron;
