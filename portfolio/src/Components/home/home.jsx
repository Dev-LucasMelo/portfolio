import React from 'react'
import "./home.css"
import Eu from '../../images/eu.png'
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from 'react-icons/fa'




const Home = () => {
    return (
        <>
            <div className='home-component'>
                <section className='apresentation'>
                    <div className='apresentation-redes'>
                        <ul className='list-redes'>
                            <li><FaGithubSquare className='icons' /> </li>
                            <li><FaLinkedin className='icons'/></li>
                            <li><FaInstagramSquare className='icons'/></li>
                        </ul>
                    </div>
                    <section className='apresentation-tittle'>
                        <div className='image-box'>
                            <img src={Eu} alt="" className='image'/>
                        </div>
                        <div className='tittles-box'>
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