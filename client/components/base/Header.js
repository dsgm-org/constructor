import React, {useState} from 'react';
import './Header.css';
import {List} from 'react-bootstrap-icons';

function Header({title, headerModules}) {
    const [isHeaderOpened, setHeaderOpened] = useState(false);
    return (
        <div className="header">
            <div className="headerLine">
                <div className="headerBlock">
                    <div className="headerContainer">
                        <div className="headerLogo">
                            {title}
                        </div>
                    </div>
                    <div className={"headerBurger" + ((isHeaderOpened) ? " headerBurgerClicked" : "")} onClick={() => {
                        setHeaderOpened(!isHeaderOpened)
                    }}>
                        <List size="44"/>
                    </div>
                    <div className={"headerButtons" + ((isHeaderOpened) ? " headerOpened" : "")}>
                        {headerModules}
                    </div>
                </div>
            </div>
            <div className="headerSpacing"/>
        </div>

    );
}

export default Header;
