import React from "react";
import github from "./images/github-512.png";
import linkedIn from "./images/linkedin-256.png";
import "./socialLinks.css";

function SocialLinks() {
    return (
        <div className="col-6 col-md-2" id="social">

            <a href="https://github.com/vanego">
                <img id="socialLinks" src={github} alt="Vanessa's Github" />
            </a>
            <a href="https://www.linkedin.com/in/vanessa-g%C3%B3mez-629aa182/">
                <img id="socialLinks" src={linkedIn} alt="Vanessa's Linkedin" />
            </a>
        </div>
    )
}

export default SocialLinks;