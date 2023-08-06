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
                    Me chamo Lucas Messias Moura de Melo, sou graduando em bacharelado em ciência da computação na UFAPE ,a área de especialização que pretendo seguir é engenharia e desenvolvimento de software.
                    Trabalho na área de T.I a cerca de 3 anos, 2 anos como autônomo, prestando serviço para empresas e pessoas da região a cerca de manutenção de computadores e hardware, também como ensinando 
                    como utilizar ferramentes como o pacote office por exemplo.
                    <br />
                    <br />
                    No último ano (2022) em abril iniciei uma nova jornada ná area de T.I onde consegui o meu "primeiro emprego" no mercado como Suporte técnico, onde estou atuando durante meio expediente.
                    <br />
                    <br />
                    Já em Novembro de 2022 consegui passar no processo seletivo do LMTS, 
                    onde estou estagiando como desenvolvedor FULL STACK PHP/JS onde fico responsável pelo planejamento, 
                    desenvolvimento e manutenção dos sistemas de cunho social ofertados e planejados por nós colaborades 
                    do projeto em conjunto com os gestores e coordenadores de diversos setores da UFAPE.
                </p>
            </div>
            <div className='skills-images'>
                <div className='skills-box'>
                    <ProgressBar data={95} stack={"HTML"} />
                    <ProgressBar data={90} stack={"CSS"} />
                    <ProgressBar data={85} stack={"JAVASCRIPT"} />
                    <ProgressBar data={80} stack={"LARAVEL/PHP"} />
                    <ProgressBar data={75} stack={"REACT.JS"} />
                    <ProgressBar data={70} stack={"Jquery"} />
                    <ProgressBar data={70} stack={"SQL"} />
                    <ProgressBar data={60} stack={"NODE/EXPRESS.JS"} />

                </div>
                <div className='images-box'>
                    <DiLaravel className='icon' />
                    <DiCss3 className='icon' />
                    <DiReact className='icon animation' />
                    <DiNodejsSmall className='icon' />
                    <DiDatabase className='icon' />
                </div>
            </div>
        </section>
    );
}

export default About;