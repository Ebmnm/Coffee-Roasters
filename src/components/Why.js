import React from 'react'
import { whyChoose} from "../data"
import "./styles/why.css"
export default function Why() {
    return (
        <div>
          <div className="why-section">
          <h1>Why choose us?</h1>
          <p className="whytopp">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level. </p>
          <div className="why-card-section">
             {whyChoose.map((why, ind) => {
               return ( 
                  <div key={ind} className="why-card">
                     <div className="img-wrap">
                         <img  src={why.image} alt="description"/>
                     </div>
                     <div  className="text">
                     <h2>{why.heading}</h2>
                     <p> {why.description}</p>
                     </div>
                     </div>  )
             })}  
             </div>     
      </div>
        </div>
    )
}
