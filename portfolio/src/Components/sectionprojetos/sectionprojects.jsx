import React from "react";
import {useState} from "react"
import "./sectionprojetos.css";

const Sectionprojects = (props) => {
    const [background,Setbackground] = useState(true) 

    
    console.log(background)
    
    function mousemove_event(e) {  
      const boxdata = e.target
        boxdata.children[0].style.display = ""
        boxdata.children[1].style.display = ""  

        //Setbackground(false)
    }
    

      function mouseleave_event(e) {
        const boxdata = e.target
        boxdata.children[0].style.display = "none"
        boxdata.children[1].style.display = "none"    

       //Setbackground(true)
    }
    

  return (

    <section className="sectionprojects_comp">
      <h1>Projetos</h1>
      <div className="projectboxall">

        {
            props.data.map((proj) => {
                return (
                    <div
                    id={proj.id}
                    onMouseMove={mousemove_event}
                    onMouseLeave={mouseleave_event}
                    key={proj.id}
                    className="project"
                    style={{
                          backgroundImage: `url(${background ? proj.background  : ""  })`
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
