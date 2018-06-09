import React from "react";
import aboutMe from "./images/blacklabel-40-about-me.jpg";
import contactMe from "./images/blacklabel-40-contact-me.jpg";
import portfolio from "./images/blacklabel-40-portfolio.jpg";
import "./leftMenu.css";


function toggleAboutMe(props) {
    // access the nav prop => props.nav

    if (props.nav === "aboutMe") {
        return (
            <div id="aboutMeText">

                Hola! I'm Vanessa- a web developer. I strive to make beautiful web designs and to continue to grow as a developer. Click
                around to learn more about me and past projects.
            </div>
        )
    } else {
        return <div></div>
    }
}

function LeftMenu(props) {
    return (
        <div id="leftMenu">
            <a href='#' onClick={() => props.handleClickNav("aboutMe")}><img id="aboutMeLabel" src={aboutMe} alt="Click about me button" /></a>

            {toggleAboutMe(props)}

            <div id="links">
                <a href='#' onClick={() => props.handleClickNav("contactMe")}>
                    <img id="aboutMeLabel" src={contactMe} alt="Click contact me button" />
                </a>

                <a href='#' onClick={() => props.handleClickNav("portfolio")}>
                    <img id="portfolioLabel" src={portfolio} alt="Click portfolio button" />
                </a>
            </div>

        </div>
    )
}

export default LeftMenu;