import React from 'react';
import App from '../App';
import Projectspage from '../projects_page/Projects';

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
                    <Route exact path="/projetos" element={<Projectspage />}/>
                </Routes>
            </Router>
        </>
    )  
}  

export default Rotas;