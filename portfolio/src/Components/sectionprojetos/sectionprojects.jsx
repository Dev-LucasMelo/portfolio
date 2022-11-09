import React from 'react';

import "./sectionprojetos.css"

const Sectionprojects = () => {

    function mousemove_event() {
        const boxdata = document.getElementById("projectbox-data")
        boxdata.classList.remove("some")
    }

    function mouseleave_event() {
        const boxdata = document.getElementById("projectbox-data")
        boxdata.classList.add("some")
    }

    return (
        <section className='sectionprojects_comp'>
            <h1>Projetos</h1>
            <div className='projectboxall'>
                <div
                    onMouseLeave={mouseleave_event}
                    onMouseMove={mousemove_event}
                    className='project'>
                    <div className='projectbox-data some' id='projectbox-data'>
                        <div className='tittleprojects' >
                            <h1>Netflix Copy Front-end</h1>
                            <h4>React.js|Axios</h4>
                        </div>
                        <div>
                           <a className='projectlink' href="" target="_blank"><p>clique para ver o projeto</p></a> 
                        </div>
                    </div>
                </div>
                <div className='project'>

                </div>
                <div className='project'>

                </div>
            </div>
        </section>
    );
}

export default Sectionprojects;