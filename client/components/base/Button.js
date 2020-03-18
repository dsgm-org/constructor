import React from "react";
import "./Button.css";

function Button({defaultText, onClick}) {
    return (
        <div className="button" onClick={onClick}>
            <div className="buttonVisible">
                <div id="buttonCurrent">
                    {defaultText}
                </div>
            </div>
        </div>
    );
}

export default Button;

