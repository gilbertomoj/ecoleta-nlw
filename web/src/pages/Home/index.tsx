import React from 'react';
import logo from '../../assets/logo.svg';
import login from '../../assets/login.svg';
import { Link } from 'react-router-dom';//Introduziu o conceio de SPA (single page app) permite uma transição rapida entre
                                        // as telas 

import './styles.css';
//Commit feito

const Home = ()=> {
    return (
        <div id="page-home">
        <div className="content">
        <header>
        <img src={logo} alt='Ecoleta'></img>
        </header>
        <main>
            <h1>Seu market place de coleta de residuos.</h1>
            <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
            <Link to="/create-point"> 
                <span> <img src={login} alt=''></img> </span>
                <strong> Cadastre um ponto de coleta </strong>
            </Link>
        </main>
        </div>  
        </div>
    );
}

export default Home;