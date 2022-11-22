import React from "react";
import { useState } from "react"
import "./sectionprojetos.css";

const Sectionprojects = (props) => {

  return (
    <section className="sectionprojects_comp">
      <h1>Projetos</h1>
      <div className="projectboxall">

        {props.data.map((proj) => {

          function Mouseevent(a) {
            const itemalvo = a.target
            itemalvo.style.background = "white"
            itemalvo.style.transition = ".3s"
            const filho = itemalvo.children

            filho[0].style.display = "flex"
            filho[1].style.display = "flex"

          }
          function Removemouseevent(a) {
            const itemalvo = a.target
            itemalvo.style.background = "black"
            itemalvo.style.backgroundImage = `url(${proj.background})`
            itemalvo.style.backgroundSize = "cover"
            itemalvo.style.transition = ".3s"

            const filho = itemalvo.children

            filho[0].style.display = "none"
            filho[1].style.display = "none"

          }

          return (
            <div
              onMouseMove={Mouseevent}
              onMouseLeave={Removemouseevent}
              id={proj.id}
              key={proj.id}
              className="project"
              style={{ backgroundImage: `url(${proj.background})` }}
            >
              <div
                key={proj.id}
                className="projectbox-data"
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
