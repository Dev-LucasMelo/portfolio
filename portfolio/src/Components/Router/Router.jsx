import React from 'react';
import App from '../App';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom"

const Rotas = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />}/>
                    <Route exact path="/projetos" element={"projetos aq"}/>
                </Routes>
            </Router>
        </>
    )  
}  

export default Rotas;