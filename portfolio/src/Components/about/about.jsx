import React from 'react'
import ProgressBar from '../progressbar/progressbar';
import './about.css'


const About = () => {
    return (
        <section className='about-component' id='about-component'>
            <div className='sobre'>
                <h2>sobre lucas</h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla error impedit animi nihil. Nam veniam placeat recusandae cumque dicta. Molestiae
                    optio amet odit ipsum veritatis perferendis error accusamus dolorum.
                </p>
            </div>
            <div className='skills-images'>
                <div className='skills-box'>
                    <ProgressBar data={50} stack={"CSS"} />
                    
                </div>
                <div className='images-box'>
                    [imagens]
                </div>
            </div>
        </section>
    );
}

export default About;