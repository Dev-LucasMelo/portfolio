import React from 'react'
import Menu from '../menu/menu';
import Sectionprojects from '../sectionprojetos/sectionprojects';

import "./Projects.css"

import Netflix from "./../../images/netflix.png"
import Crud from "./../../images/crud.png"
import Dsmovie from "./../../images/Dsmovie.png"
import gerenciador from "./../../images/gerenciador.png"

const ops = [
    {
        "id" : 1,
        "op" : "Voltar",
        "href" : "/"
    }
]

const arrayprojects = [
    {
        "id" : 3,
        "background" : gerenciador,
        "tittle": "Gerenciador de Tarefas",
        "stacks" : "React.js|NODE.JS|PostgreSQL",
        "href" : "https://lucasmelogerenciador.netlify.app/"
    },
    {
        "id" : 2,
        "background" : Dsmovie,
        "tittle": "DSMOVIE",
        "stacks" : "React.js|JAVA|PostgreSQL",
        "href" : "https://desenvolvedor-lucasmelodsmovie.netlify.app/"
    },
    {
        "id" : 1,
        "background" : Crud,
        "tittle": "CRUD",
        "stacks" : "React.js|NODE.JS|PostgreSQL",
        "href" : "https://sistema-de-listagem.netlify.app/"
    },
    {
        "id" : 0,
        "background" : Netflix,
        "tittle": "Netflix Copy Front-end",
        "stacks" : "React.js",
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