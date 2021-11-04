import React from 'react'
import "./styles/orderSummary.css"
export default function OrderSummary({selectedOption, setSelectedOption}) {

function oneSelected() {
  switch (selectedOption.One) {
    default:  return  "_____" 
    case "Capsule": return " Capsules"
    case "Filter": return " Filters"
    case "Expresso":   return " Expressos"
  }
}

function twoSelected() {
  switch(selectedOption.Two) {
    default:  return  "_____" 
    case "Single Origin": return " Single Origin "
    case "Decaf": return " Decaf "
    case "Blended": return " Blended "
  }
 }

 function threeSelected() {
   switch(selectedOption.Three) {
     default: return  "_____" 
     case "250g": return " 250g "
     case "500g": return " 500g "
     case "1000g": return " 1000g "
   }
 }
 function fourSelected() {
   switch(selectedOption.Four) {
     default: return  "_____"
     case "Wholebean": return " Wholebean"
     case "Filter": return " Filter"
     case "Cafetiére": return " Cafetiére"
   }
 }

 function fiveSelected() {
 switch (selectedOption.Five) {
   default:  return "_____" 
   case "Every week": return "Every week"
   case "Every two weeks": return "Every two weeks"
   case "Every month": return "Every month"
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
