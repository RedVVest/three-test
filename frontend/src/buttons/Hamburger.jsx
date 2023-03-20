import React from 'react';
import "./style.css"

const Hamburger = (props) => {

    return (
        <div className="app">
            <div className={props.toggle ? "center active": "center inactive"} onClick={props.handleClick}>
                <span className="spanOne"></span>
                <span className="spanTwo"></span>
                <span className="spanThree"></span>
            </div>
        </div>
    );
}

export default Hamburger;