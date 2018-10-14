import React from "react";
import "./Navbar.css"

const Navbar = props => (
    <nav className = "navbar">
        <ul>
            <li><a href ="/">Clicky Game</a></li>
            <li>Click an image to begin</li>
            <li> Score: {props.score} | High Score {props.highScore}</li>
        </ul>
    </nav>
)

export default Navbar;