import React from 'react'
import "./styles/orderSummary.css"
export default function OrderSummary({selectedOption, setSelectedOption}) {

function oneSelected() {
   if(selectedOption.One === "") {
    return  "_____" 
   } else if(selectedOption.One === "Capsule") {
     return " Capsules"
   } else if(selectedOption.One === "Filter") {
    return " Filters"
  } else if(selectedOption.One === "Expresso") {
    return " Expressos"
  }
}

function twoSelected() {
    if(selectedOption.Two === "") {
     return  "_____" 
    } else if(selectedOption.Two === "Single Origin") {
      return " Single Origin "
    } else if(selectedOption.Two === "Decaf") {
     return " Decaf "
   } else if(selectedOption.Two === "Blended") {
     return " Blended "
   }
 }

 function threeSelected() {
    if(selectedOption.Three === "") {
     return  "_____" 
    } else if(selectedOption.Three === "250g") {
      return " 250g"
    } else if(selectedOption.Three === "500g") {
     return " 500g"
   } else if(selectedOption.Three === "1000g") {
     return " 1000g"
   }
 }
 function fourSelected() {
    if(selectedOption.Four === "") {
     return  "_____" 
    } else if(selectedOption.Four === "Wholebean") {
      return " Wholebean"
    } else if(selectedOption.Four === "Filter") {
     return " Filter"
   } else if(selectedOption.Four === "Cafetiére") {
     return " Cafetiére"
   }
 }
 function fiveSelected() {
    if(selectedOption.Five === "") {
     return  "_____" 
    } else if(selectedOption.Five === "Every week") {
      return " Every week"
    } else if(selectedOption.Five === "Every two weeks") {
     return " Every two weeks"
   } else if(selectedOption.Five === "Every month") {
     return " Every month"
   }
 }



    return (
        <>
        <section className="order-summary">
        <p> 
        “I drink my coffee   
        {selectedOption.One !== "" ? " using" : null}
      <span>{oneSelected()}</span>
        , with a
        <span>{twoSelected()}</span>
         type of bean. 
       <span> {threeSelected()}</span>
          { selectedOption.One === "Capsule" ? null : " ground ala"}
         <span>{selectedOption.One === "Capsule" ? null : fourSelected() }</span>
           , sent to me 
         <span> {fiveSelected()}</span>
           ."
        </p>
      </section>
    
        </>
    )
}
