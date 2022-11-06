import React from 'react'
import "./scrolltop.css"
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Scrolltop = () => {

   

    return (
        <>  
           <a id="scroll" className='scroll ' href="#top"><BsFillArrowUpCircleFill /></a> 
        </>
    );
}

export default Scrolltop;