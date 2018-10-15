import React from "react";
import "./Footer.css";
import logo from "../../logo.svg"

const Footer = () => (
    <footer className = "footer">
        <div>Clicky Game <img id="logo" alt="react-logo" src={logo}></img></div>
    </footer>
)

export default Footer;