import React from 'react';
import style from '../components/services.module.css'
import Card from './Card';
import bulb from '../assets/bulb.svg'
import computer from '../assets/computer.svg'
import spring from '../assets/spring.svg'
import git from '../assets/git.svg'
import java from '../assets/java.svg'
import react from '../assets/react.svg'

const Services = () => {

    var content = {
        head1:"Creative Design",
        head2:"HTML/CSS",
        head3:"Spring Boot",
        head4:"React",
        head5:"Git",
        head6:"java",
        cont1:'I have a creative mind, i love to come up with various designs for websites and also make suggestions on exsisting designs for future updates. ',
        cont2:"I have worked on html together with css to able to organise several web components to create web.",
        cont3:"with good under standing of spring boot and hibernate i was able to create restful APIs. here i also handled designing my database structure.  ",
        reacts:"i am able to create and design custom components with react and also manage appstate using VUE.js . ",
        gits:"With my knowledge on git i can handle the version control of projects and also track changes in projects.",
        javas:"java being my prefered laguage, im good at thinking of solutions and solving problems with java. "



    }
    return (
        <div className={style.main}>
            <h4>Skills</h4>
            <div className={style.main}>
            <Card image={bulb} head = {content.head1} content={content.cont1}></Card>
            <Card image={computer} head={content.head2} content={content.cont2}></Card>
            <Card image={spring} head={content.head3} content={content.cont3}></Card>
            <Card image={react} head={content.head4} content={content.reacts}></Card>
            <Card image={git} head={content.head5} content={content.gits}></Card>
            <Card image={java} head={content.head6} content={content.javas}></Card>
            

            </div>

        </div>
    );
}

export default Services;
