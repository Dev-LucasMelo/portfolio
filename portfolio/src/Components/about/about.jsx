import React from 'react'
import ProgressBar from '../progressbar/progressbar';
import './about.css'
import {
    DiNodejsSmall,
    DiCss3,
    DiReact,
    DiDatabase,
    DiLaravel
} from "react-icons/di"


const About = () => {
    return (
        <section className='about-component' id='about-component'>
            <div className='sobre'>
                <h2>Sobre lucas</h2>
                <br />
                <p>
                    Desenvolvedor Web com especialização em Front-End, responsável pelo desenvolvimento
                    de interfaces gráficas para websites e implementação de funcionalidades, tais como, 
                    funções de busca, integração de Apis e responsividade, também como na criação do web-design 
                    do projeto e desenvolvimento do "zero".
                </p>
            </div>
            <div className='skills-images'>
                <div className='skills-box'>
                    <ProgressBar data={95} stack={"HTML"} />
                    <ProgressBar data={90} stack={"CSS"} />
                    <ProgressBar data={85} stack={"JAVASCRIPT"} />
                    <ProgressBar data={75} stack={"REACT.JS"} />
                    <ProgressBar data={70} stack={"NODE/EXPRESS.JS"} />
                    <ProgressBar data={65} stack={"LARAVEL/PHP"} />
                    <ProgressBar data={60} stack={"SQL"} />

                </div>
                <div className='images-box'>
                    <DiLaravel className='icon' />
                    <DiCss3 className='icon' />
                    <DiReact className='icon animation'/>
                    <DiNodejsSmall className='icon'/>
                    <DiDatabase className='icon' />
                </div>
            </div>
        </section>
    );
}

export default About;