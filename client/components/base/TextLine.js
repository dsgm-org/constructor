import React from 'react';
import './TextLine.css';
import Text from "./Text";

function TextLine({name, value}) {
    return (
        <div className="text-line">
            <Text type="Strong" value={name}/>
            <Text type="Inline" value={value}/>
        </div>
    );
}

export default TextLine;
