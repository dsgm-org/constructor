import React from 'react';
import Header from "../base/Header";
import LanguageDropdown from "./LanguageDropdown";
import LocalSearch from "./LocalSearch";
import LocalAccount from "./LocalAccount";
import DarkThemeButton from "./DarkThemeButton";
import {Link} from "react-router-dom";

function LocalHeaderModules() {
    return ([
            <LocalSearch key="0"/>,
            <div key="1" style={{display: "flex", flexDirection: "row"}}>
                <LanguageDropdown/>
                <LocalAccount/>
                <DarkThemeButton/>
            </div>
    ]);
}

function LocalHeader() {
    return (
        <Header title={<Link to="/">DSGM</Link>} headerModules={<LocalHeaderModules/>}/>
    );
}

export default LocalHeader;