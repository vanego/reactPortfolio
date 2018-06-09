import React from "react";
import myNameImage from "./images/blacklabel-100-vanessa-gomez.jpg";
import "./name.css";

function Name() {
    return (
        <div className="col-12 col-md-10" id="header">
            <img id="name" src={myNameImage} alt="Vanessa Gomez" />
        </div>
    )
}

export default Name;