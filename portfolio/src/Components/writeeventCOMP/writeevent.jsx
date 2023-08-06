import React from 'react';
import {useState,useEffect} from 'react';
import "./../../Components/home/home.css";

const Writeevent = (props) => {
    const[text,settext] = useState("")

    function escrever(text,i = 0){
        if (i < text.length){
            settext(text.slice(0, i + 1))
            setTimeout(() => escrever(text,i+1),100)
        }
    }

    useEffect(() =>{
       setTimeout(() => escrever(props.text))  
    },[])

    return (
        <h1 className="tittle"> {text}</h1>
    );
}

export default Writeevent;