// import React, { useRef,useState } from 'react';
import HeaderCss from "../components/head.module.css"
import Button from './Button';


const Head = () => {


    const click = (e) => {
        var id = e.target.id;
        // console.log(id);
        if(id === "one"){
            window.scrollTo({ behavior: "smooth", left: 0, top: 750}); 
        }
        if(id === "two"){
            window.scrollTo({ behavior:"smooth", left: 0, top: 700});
        }
        if(id === "three"){
            window.scrollTo({ behavior: "smooth", left: 0, top: 1750});
        }
        if(id === "four"){
            window.scrollTo({ behavior: "smooth", left: 0, top: 2600});
        }
    }

    
    return (
        <div className={HeaderCss.main}>
            <div className={HeaderCss.left}></div>
            <div className={HeaderCss.right}>
                <Button content ={"Home"} li={click} id="one"></Button>
                <Button content ={"About"} li={click} id="two"></Button>
                <Button content ={"Portfolio"} li={click} id="three" ></Button>
                <Button content ={"contact"} li={click} id="four" ></Button>
            </div>
        </div>
    );
}

export default Head;
