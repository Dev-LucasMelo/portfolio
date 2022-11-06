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
                            <li><FaGithubSquare className='icons' /> </li>
                            <li><FaLinkedin className='icons' /></li>
                            <li><FaInstagramSquare className='icons' /></li>
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