import React from 'react';
import {useState,useEffect} from 'react';

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
        <h2 className={props.class}> {text}</h2>
    );
}

export default Writeevent;