import React from "react";
import {useEffect} from "react"
import "./sectionprojetos.css";

const Sectionprojects = (props) => {

  return (
    <section className="sectionprojects_comp">
      <h1>Projetos</h1>
      <div className="projectboxall">
        {props.data.map((proj) => {
          //FUNCS IMGS
        
          const boxes = document.querySelectorAll(".project")


          boxes.forEach(element => {
            const backgrounddata = props.data[element.id].background
             
            element.addEventListener("mousemove",()=>{
              element.style.backgroundImage = ""
            })

            element.addEventListener("mouseleave",()=>{
              element.style.backgroundImage = `url(${backgrounddata})`   
            })  

            element.style.backgroundImage = `url(${backgrounddata})` 
          });

         //funcs texts
     
          function mousemove_event(e) {
            const boxdata = e.target;
            boxdata.children[0].style.display = "";
            boxdata.children[1].style.display = "";

          }

          function mouseleave_event(e) {
            const boxdata = e.target;
            boxdata.children[0].style.display = "none";
            boxdata.children[1].style.display = "none";

          }

          return (
            <div
              id={proj.id}
              key={proj.id}
              className="project"
            >
              <div
                key={proj.id}
                className="projectbox-data "
                id={`projectbox-data`}
              >
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
          );
        })}
      </div>
    </section>
  );
};

export default Sectionprojects;
