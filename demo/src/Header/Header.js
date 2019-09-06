import React from "react";
import './Header.css';

//ES5
/* function Header(){
    return (
        <div>wow - ES5</div>
    )
} */

//ES6
const Header = (props) => {
    return (
    <div className="headerStyle">
        <p>{props.title} {props.time}</p>
    </div>
    )
}

export default Header;