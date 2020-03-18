import React from 'react';
import './Text.css';

function Text({value, type}) {
    return (
        <div className={"text text"+type}>
            {value}
        </div>
    );
}

export default Text;
