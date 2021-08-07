import React from 'react'
import "./styles/home.css"
import HowSection from "./HowSection"
import {collection, whyChoose} from "../data"
import Footer from  "./Footer"
import { Link } from 'react-router-dom';
import Collection from  "./Collection"
import Why from "./Why"
export default function Home() {
    return (
        <>
        <div className="container">
            <div className="side-text">
        <h1>Great Coffee made simple.</h1>
        <p> Start your mornings with the world's best coffee. Try our expertly curated artisan coffee from our best roasters delivered directly to your door, at your schedule</p>
            <Link className="home-button" to="/plan"> Create your plan</Link>
            </div>
        </div>


    <Collection />
     <Why />
    <HowSection />
    <Footer/>
        

        </>
    )
}
