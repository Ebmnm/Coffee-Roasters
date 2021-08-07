import React, {useState} from 'react'
import Logo from "../svg/Logo"
import { Link } from 'react-router-dom';
import "./styles/navbar.css"
export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false)

    
    return (
        <div className="nav-container">
           <Logo />
           <svg onClick={() => setToggleNav(!toggleNav)} className="hamberger" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z" fill="#333D4B" fillRule="evenodd"/></svg>
           <div className={ toggleNav ? "show-links" : "hide-links" }>
               <Link   className="nav-link" to="/Coffee-Roasters">HOME</Link>
               <Link   className="nav-link" to="/plan">CREATE YOUR PLAN</Link>
           </div>
        </div>
    )
}
