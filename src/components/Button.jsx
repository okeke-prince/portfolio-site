import React from 'react';
import ButtonCss from "../components/button.module.css"


const Button = (props) => {
    // var s = props.x;
    // var id = props.id;

    return (
        <div className={ButtonCss.main}>
            <a  className={ButtonCss.link} onClick={props.li} id={props.id} href="#">{props.content}</a>
        </div>
    );
}

export default Button;
