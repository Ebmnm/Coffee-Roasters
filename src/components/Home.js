import React, {useLayoutEffect} from 'react'
import "./styles/home.css"
import HowSection from "./HowSection"
import Footer from  "./Footer"
import { Link } from 'react-router-dom';
import Collection from  "./Collection"
import Why from "./Why"
import {motion} from "framer-motion"

export default function Home() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[]);
    
    return (
        <>
        <motion.div className="container"
          initial={{opacity:0, y:-50}}
          animate={{  y: 0, opacity: 1 }}
         transition={{
         delay: 0,
         x: { type: "spring", stiffness: 100 },
         default: { duration: .6 },}} >
            <div className="side-text">
        <h1>Great Coffee made simple.</h1>
        <p> Start your mornings with the world's best coffee. Try our expertly curated artisan coffee from our best roasters delivered directly to your door, at your schedule</p>
            <Link className="home-button" to="/plan"> Create your plan</Link>
            </div>
        </motion.div>

    <Collection />
     <Why />
<HowSection />
    <Footer/>
        

        </>
    )
}
