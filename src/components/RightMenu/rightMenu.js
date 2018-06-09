import React from "react";
import "./rightMenu.css";


function toggleBetweenButtons(props) {
    // access the nav prop => props.nav

    if (props.nav === "aboutMe") {
        return (
            <div>
                <h1>About Me</h1>
                <p>I am a nice person</p>
            </div>
        )
    } else if (props.nav === "contactMe") {
        return (
            <h1>Contact Me</h1>
        )
    } else if (props.nav === "portfolio") {
        return (
            <h1>Portfolio</h1>
        )
    }
}

function RightMenu(props) {
    return (
        <div id="rightMenu">
            {toggleBetweenButtons(props)}

        </div>

    )
}

export default RightMenu;