import React from "react";
import "./menu.css";

const Menu = (props) => {

  

  return (
    <header className="menu-component">
      <h1 className="name">Lucas Melo</h1>
      <ul className="menu-list">
            {
                props.ops.map((itens) =>  <a id={itens.id} key={itens.id} href={itens.href}><li className='link' >{itens.op}</li></a> )
            }
      </ul>
    </header>
    
  );
};

export default Menu;
