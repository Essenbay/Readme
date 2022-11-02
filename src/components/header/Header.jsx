import "./Header.css"
import React from 'react'
import logo from '../../images/logo.png'; 

function Header(){
    return (
        <header className="header">
            <div className="logo"><a href="index.html"><img src={logo} alt="" /></a></div>
        </header>
    )
}
export default Header;