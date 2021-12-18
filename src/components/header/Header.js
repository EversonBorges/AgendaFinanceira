import React from 'react'
import logo from '../../assets/logo.png'
import '../header/estilo.css'

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo da página" className="logo"></img>
            <h1 className="titulo">Agenda Financeira</h1>
        </div>
    )
}
export default Header;
