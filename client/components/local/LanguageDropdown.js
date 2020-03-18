import React from 'react';
import Dropdown from "../base/Dropdown";
import LanguageManager from "../../API/LanguageManager";

function LanguageDropdown() {
    return (
        <Dropdown defaultText={LanguageManager.currentLanguage} items={LanguageManager.availableLanguages} onValueChange={LanguageManager.changeLanguage} style={{flexGrow: 1}}/>
    );
}

export default LanguageDropdown;