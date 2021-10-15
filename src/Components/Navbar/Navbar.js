import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <Link to="/anim" className="anim">
                ANIM
            </Link>
            <Link to="/" className="list">
                LIST
            </Link>
            <Link to="/scroll" className="scroll">
                SCROLL
            </Link>
            <Link to="/disappear" className="disappear">
                DISAPPEAR
            </Link>
        </nav>
    )
}
