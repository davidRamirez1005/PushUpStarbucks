import { Link } from 'react-router-dom';
import React from 'react'
import style from './styles/navbar.module.css'

export default function NavBar({children}) {
    return (
        <>
        <nav className={style.nav}>
            <ul className={style.ul}>
            <h4 className={style.h4}><Link to="/" style={{textDecoration:"none", color : "steelblue"}}>Inicio</Link></h4>
            <h4 className={style.h4}><Link to="/menu" style={{textDecoration:"none", color : "steelblue"}}>Menu</Link></h4>
            <h4 className={style.h4}><Link to="/novedades" style={{textDecoration:"none", color : "steelblue"}}>Novedades</Link></h4>
            <h4 className={style.h4}><Link to="/contactos" style={{textDecoration:"none", color : "steelblue"}}>Contactos</Link></h4>
            </ul>
        </nav>
        <main>{children}</main>
        </>
    )
}



