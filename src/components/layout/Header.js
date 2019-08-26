import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

function Header() {
    return(
        <header style={headerStyle}>
            <img className="headerImg" src={Logo} alt="ToDo"/> <br/>
            <Link className="linkStyle" to={`${process.env.PUBLIC_URL}/`} >Home</Link> | <Link className="linkStyle" to={`${process.env.PUBLIC_URL}/about`} >About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#5882FA',
    borderRadius: '10px',
    boxShadow: '0px 5px 5px grey',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    margin: ' 10px'
}

export default Header;