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
                
            </div>
        </>
    );
}

export default Home;