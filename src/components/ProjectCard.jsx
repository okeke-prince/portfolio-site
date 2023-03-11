import React from 'react';
import style from "../components/projectCard.module.css"
import Button from './Button';

const ProjectCard = (prop) => {
    return (
        <div className={style.main}>
            <div className={style.top}><img src={prop.img} alt="" srcset="" /></div>
            <div className={style.bottom}>
                <h4>{prop.head}</h4>
                <p>{prop.content}</p>
                <div className={style.skillUsed}>
                    <h5>Frameworks used</h5>
                    <ul className={style.list}>
                        <li>Spring Boot</li>
                        <li>Hidernate</li>
                        <li>Postgres SQL</li>
                    
                    </ul>
                    <div className={style.view}><a href="https://github.com/okeke-prince/Library-Api">View code</a></div>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectCard;
