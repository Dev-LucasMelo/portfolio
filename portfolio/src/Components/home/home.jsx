import React from 'react'
import "./home.css"
import Eu from '../../images/eu.png'
import {FaGithubSquare,FaWhatsappSquare} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'

const Home = () => {
    return (
        <>
            <div className='home-component'>
                <header className='menu'>
                    <h1>Lucas Melo</h1>
                    <ul className='menu-list'>
                        <li>about</li>
                        <li>stacks</li>
                        <li>portfolio</li>
                    </ul>
                </header>
                <section className='apresentation'>
                    <div className='apresentation-redes'>
                        <ul className='list-redes'>
                            <li><FaGithubSquare className='icons' /> </li>
                            <li><IoLogoLinkedin className='icons'/></li>
                            <li><FaWhatsappSquare className='icons'/> </li>
                            <li><MdEmail className='icons'/></li>
                        </ul>
                    </div>
                    <div className='apresentation-tittle'>
                        <div className='image-box'>
                            <img src={Eu} alt="" className='image'/>
                        </div>
                        <div>
                            <h1 className='tittle'>WEB DEVELOPER</h1> 
                            <h2 className='subtittle'>Specialized in frontend</h2>   
                        </div>
                    </div>               
                </section>
                
            </div>
        </>
    );
}

export default Home;