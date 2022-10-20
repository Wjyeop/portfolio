import React from "react";
import Watch from "./Watch";
import './css/style.css';
import './css/common.css';


export const Menu = () => {
    return(
        <div id="header">
            <div className="logo">
            </div>
            <div className="menu">
                <ul>
                    <li><sapn className="menu1"/><i>PROFILE</i></li>
                    <li><span className="menu2"/><i>CONTACT</i></li>
                    <li><span className="menu2"/><i>SKILLS</i></li>
                    <li><span className="menu2"/><i>PROJECT</i></li>
                </ul>
            </div>
            <div className="today">
             <Watch/>
            </div>
        </div>
    )
}

export default Menu;