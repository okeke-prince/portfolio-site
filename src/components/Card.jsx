import React from 'react';
import style from '../components/card.module.css'

const Card = (props) => {
    return (
        <div className={style.main}>
            <img src={props.image} alt="" />
            <h4>{props.head}</h4>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;
