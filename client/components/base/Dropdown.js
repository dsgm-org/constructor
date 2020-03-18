import React from "react";
import {ChevronDown} from "react-bootstrap-icons";
import "./Dropdown.css";

function Dropdown({defaultText, items, onValueChange}) {
    return (
        <div className="dropdown">
            <div className="dropdownVisible">
                <div id="dropdownCurrent">
                    {defaultText}
                </div>
                <ChevronDown size="16"/>
            </div>
            <div className="dropdownContent">
                {
                    items.map((item, id) => (
                        <div className="dropdownItem" onClick={()=>onValueChange(item)} key={id}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Dropdown;

