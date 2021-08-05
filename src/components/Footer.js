import React from 'react'
import "./styles/footer.css"
import LogoWhite from "../svg/LogoWhite"
import Twitter from "../svg/Twitter"
import Facebook from "../svg/Facebook"
import Instagram from "../svg/Instagram"
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className="footer">
            <LogoWhite />
            <Link to="/Coffee-Roasters">HOME</Link>
            <Link to="/plan">CREATE YOUR PLAN</Link>
            <div className="socials">
            <div className="social">
           <Facebook/>
            </div>

            <div className="social">
           <Twitter/>
           </div>

           <div className="social">
           <Instagram/>
           </div>
           </div>

        </div>
    )
}
