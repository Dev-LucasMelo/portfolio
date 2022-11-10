import React from "react";
//import {useState} from "react"
import "./sectionprojetos.css";

const Sectionprojects = (props) => {

    /* 
    function mousemove_event(e) {  
        const boxdata = document.getElementById(`projectbox-data1`);
        boxdata.classList.remove("some");
    }
    
      function mouseleave_event(e) {
        const boxdata = document.getElementById("projectbox-data2");
        boxdata.classList.add("some"); 
    }
    */

  return (

    <section className="sectionprojects_comp">
      <h1>Projetos</h1>
      <div className="projectboxall">

        {
            props.data.map((proj) => {
                return (
                    <div
                    key={proj.id}
                    className="project"
                    style={{
                          backgroundImage: `url(${proj.background})`
                    }}
                  >
                    <div className="projectbox-data " id={`projectbox-data`}>
                      <div className="tittleprojects">
                        <h1>{proj.tittle}</h1>
                        <h4>{proj.stacks}</h4>
                      </div>
                      <div>
                        <a className="projectlink" href={proj.href} target="_blank">
                          <p>clique para ver o projeto</p>
                        </a>
                      </div>
                    </div>
                  </div>
                )
            })   
        }
      </div>
    </section>
  );
};

export default Sectionprojects;
