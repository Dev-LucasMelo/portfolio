import React from 'react'
import Menu from '../menu/menu';
import Sectionprojects from '../sectionprojetos/sectionprojects';

import "./Projects.css"

import Netflix from "./../../images/netflix.png"
import eu from "./../../images/eu.png"

const ops = [
    {
        "id" : 1,
        "op" : "Voltar",
        "href" : "/"
    }
]

const arrayprojects = [
    {
        "id" : 1,
        "background" : Netflix,
        "tittle": "Netflix Copy Front-end",
        "stacks" : "React|Axios",
        "href" : "https://dev-lucasmelo.github.io/netflix_build/"
    },
    {
        "id" : 2,
        "background" : eu,
        "tittle": "teste",
        "stacks" : "React|Node",
        "href" : "https://dev-lucasmelo.github.io/netflix_build/"
    },
]

const Projectspage = () => {
    return (  
        <>
            <Menu ops={ops} />
            <Sectionprojects img={Netflix} data={arrayprojects} />
            
        </>
    );
}
 
export default Projectspage;