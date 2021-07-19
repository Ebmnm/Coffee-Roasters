import React from 'react'
import "./styles/home.css"
import HowSection from "./HowSection"
import {collection, whyChoose} from "../data"
import Footer from  "./Footer"
export default function Home() {
    return (
        <>
        <div className="container">
            <div className="side-text">
        <h1>Great Coffee made simple.</h1>
        <p> Start your mornings with the world's best coffee. Try our expertly curated artisan coffee from our best roasters delivered directly to your door, at your schedule</p>
            <button> Create your plan</button>
            </div>
        </div>

    
        <h1 className="collectionh1">Our Collection</h1>
        <div className="collection">
       
            {collection.map((col, ind) => {
                return ( 
                <div key={ind} className="collection-wrap">
                    <div key={ind} className="img-wrap">
                   <img key={ind} src={col.image}/>
                   </div>
                   <div className="text" key={ind}>
                        <h2 key={ind}>{col.heading}</h2>
                        <p key={ind} >{col.description}</p>
                   </div>
                </div>
                     
             )})}
            </div>
      

      <div className="why-section">
          <h1>Why choose us?</h1>
          <p className="whytopp">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level. </p>
          <div className="why-card-section">
             {whyChoose.map((why, ind) => {
               return (  <div key={ind} className="why-card">
                     <div key={ind} className="img-wrap">
                         <img key={ind} src={why.image}/>
                     </div>
                     <div key={ind} className="text">
                     <h2 key={ind}>{why.heading}</h2>
                     <p key={ind}> {why.description}</p>
                     </div>
                     </div>  )
             })}  
             </div>     
      </div>

<HowSection />

<Footer/>
        

        </>
    )
}
