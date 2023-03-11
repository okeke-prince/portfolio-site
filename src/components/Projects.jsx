import React from 'react';
import style from '../components/projects.module.css'
import ProjectCard from './ProjectCard';
import uni from "../assets/uni.jpeg"

const Projects = () => {
    const values = {
        "lib":"An API for a university system that can perform major functionalities, such as creating new students and lecturers, assigning students and lecturers to various courses and much more....",
        "head":"Library System"
    }
    return (
        <div className={style.main}>
            <ProjectCard img={uni} content={values.lib} head={values.head}></ProjectCard>
        </div>
    );
}

export default Projects;
