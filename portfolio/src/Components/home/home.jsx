import React from 'react'
import "./home.css"
import Eu from '../../images/eu.png'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import Writeevent from '../writeeventCOMP/writeevent'



const Home = () => {

    return (
        <>
            <div className='home-component'>
                <section className='apresentation'>
                    <div className='apresentation-redes'>
                        <ul className='list-redes'>
                           <a href="https://github.com/Dev-LucasMelo" target='_blank' ><li><FaGithubSquare className='icons' /> </li></a> 
                           <a href="https://www.linkedin.com/in/lucas-messias07/" target='_blank'> <li><FaLinkedin className='icons' /></li></a> 
                           <a href="https://www.instagram.com/dev_lucasmelo/" target='_blank'> <li><FaInstagramSquare className='icons' /></li></a> 
                        </ul>
                    </div>
                    <section className='apresentation-tittle'>
                        <div className='image-box'>
                            <img src={Eu} alt="" className='image' />
                        </div>
                        <div className='tittles-box'>
                            <h1 id="tittle" className='tittle'>WEB DEVELOPER</h1>
                            <Writeevent class="subtittle" text="Specialized in frontend" />
                        </div>
                    </section>
                </section>

            </div>
        </>
    );
}

export default Home;