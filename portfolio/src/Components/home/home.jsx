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
                <section className='apresentation'>
                    <div className='apresentation-redes'>
                        <ul className='list-redes'>
                            <li><FaGithubSquare className='icons' /> </li>
                            <li><IoLogoLinkedin className='icons'/></li>
                            <li><FaWhatsappSquare className='icons'/> </li>
                            <li><MdEmail className='icons'/></li>
                        </ul>
                    </div>
                    <section className='apresentation-tittle'>
                        <div className='image-box'>
                            <img src={Eu} alt="" className='image'/>
                        </div>
                        <div>
                            <h1 className='tittle'>WEB DEVELOPER</h1> 
                            <h2 className='subtittle'>Specialized in frontend</h2>   
                        </div>
                    </section>               
                </section>
                
            </div>
        </>
    );
}

export default Home;