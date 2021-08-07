import React from 'react'
import {collection, whyChoose} from "../data"
import "./styles/collection.css"
export default function Collection() {
    return (
        <div>
              <h1 className="collectionh1">Our Collection</h1>
        <div className="collection">
       
            {collection.map((col, ind) => {
                return ( 
                <div key={ind} className="collection-wrap">
                    <div  className="img-wrap">
                   <img  src={col.image}/>
                   </div>
                   <div className="text" >
                        <h2 >{col.heading}</h2>
                        <p  >{col.description}</p>
                   </div>
                </div>
                     
             )})}
            </div>
        </div>
    )
}
