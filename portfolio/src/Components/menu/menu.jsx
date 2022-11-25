import React from "react";
import "./menu.css";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { useState } from "react"

const Menu = (props) => {
  var [Hamburguer, setHamburguer] = useState(1)


  function ativa() {
    setHamburguer(Hamburguer + 1)
  }


  if (Hamburguer % 2 === 1) {
    const itens = document.querySelectorAll(".menu-list li")
    
    
    itens.forEach((i) => {
      i.classList.add("some")
    })


  } else if (Hamburguer % 2 === 0) {
    const itens = document.querySelectorAll(".menu-list li")

  
    itens.forEach((i) => {
      i.classList.remove("some")
    })


  }

  return (
    <header className="menu-component">
      <h1 className="name">Lucas Melo</h1>

      <ul className={`menu-list
        ${Hamburguer % 2 == 1 ? "":"menu-list-open"}
      `}>
        <button onClick={ativa} className="menu_hamb">{Hamburguer % 2 === 0 ? <IoClose /> : <GiHamburgerMenu />} </button>
        {
          props.ops.map((itens) => {
            return (
              <>
                <a
                  id={itens.id}
                  key={itens.id}
                  href={itens.href}>

                  <li className={`link 
                  
                  ${Hamburguer % 2 === 1 ? "some" : ""}`
                  
                  }>
                    {itens.op}

                  </li>
                </a>
              </>
            )
          })
        }
      </ul>
    </header>

  );
};

export default Menu;
