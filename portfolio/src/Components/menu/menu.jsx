import React from 'react'
import "./menu.css"

const Menu = () => {
    return (
        <header className='menu-component'>
            <h1 className='name'>Lucas Melo</h1>
            <ul className='menu-list'>
                <a href='#about-component'><li className='link'>about</li></a>
                <a href="#contact"><li className='link'>Contact</li></a> 
                <li className='link'>portfolio</li>
                
            </ul>
        </header>
    );
}

export default Menu;