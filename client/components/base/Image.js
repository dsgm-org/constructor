import React from "react";
import "./Image.css";

function Image({url, height}) {
    return (
        <div className="image" style={{backgroundImage: "url(" + url + ")", height: height}}/>
    );
}

export default Image;

