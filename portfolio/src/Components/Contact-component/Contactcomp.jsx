import React from 'react';
import "./contact.css"
import { MdLocationOn } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"




const Contact = () => {

    return (
        <footer id="contact" className='contact-comp'>
            <div>
                <h1 className='tittle-footer' >ENTRE EM CONTATO</h1>
                <div className='contact-box'>
                    <div className='alinha'>
                        <BsWhatsapp className='icons-footer' /><h2 className='text'>87 99969-3641</h2>
                    </div>
                    <div className='alinha'>
                        <MdLocationOn className='icons-footer' /><h2 id="text" className='text'>Garanhuns-PE</h2>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Contact;