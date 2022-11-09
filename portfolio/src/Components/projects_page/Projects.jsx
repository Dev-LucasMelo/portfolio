import React from 'react'
import Home from '../home/home';
import Menu from '../menu/menu';
import Sectionprojects from '../sectionprojetos/sectionprojects';

import "./Projects.css"


const ops = [
    {
        "id" : 1,
        "op" : "Voltar",
        "href" : "/"
    }
]

const arrayprojects = [
    
]

const Projectspage = () => {
    return (  
        <>
            <Menu ops={ops} />
            <Sectionprojects />
            
        </>
    );
}
 
export default Projectspage;