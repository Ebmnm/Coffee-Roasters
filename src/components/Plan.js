import React, {useState} from 'react'
import "./styles/plan.css"
import PlanHowSection from './PlanHowSection'
export default function Plan() {
    const [show, setShow] = useState(false)
    const [selectedOption, setSelectedOption] = useState({
        One: "",
        Two: "",
        Three:"",
        Four:"", 
        Five:""
    })

function toggleText(e) {
setShow(!show);
let sibiling = e.target.nextElementSibling
sibiling.classList.toggle("flip")
sibiling.parentNode.nextElementSibling.classList.toggle("hide")
}


function oneSelect(e) {
    let coffeeType = e.target.getAttribute("data-coffee-type");
 if(selectedOption.One === coffeeType) {
     setSelectedOption({One: ""})
 } else{
   setSelectedOption({One: coffeeType})
 }

}

    return (
 <>
     <section className="plan-hero">
    <div className="side-text-plan">
    <h1>Create a Plan </h1>
    <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door. </p>
     </div>
      </section>


     <PlanHowSection />

        <section className="option-section">
        <div  className="question"> <p onClick={toggleText}>How do you drink your coffee?</p>  <span className="arrow"></span></div>  
                 <ul className="hide selection">
                    <li onClick={oneSelect} data-coffee-type="Capsule" className={selectedOption.One == "Capsule" ? "selected" : null}> 
                        <h1>Capsule</h1>
                        <p>Compatible with Nespresso systems and similar brewers</p>
                    </li>
                    <li onClick={oneSelect} data-coffee-type="Filter" className={selectedOption.One == "Filter" ? "selected" : null}> 
                        <h1>Filter</h1>
                        <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                    </li>
                    <li onClick={oneSelect} data-coffee-type="Expresso" > 
                        <h1>Expresso</h1>
                        <p>Dense and finely ground beans for an intense, flavorful experience</p>
                    </li>
                 </ul> 
        <div  className="question"><p onClick={toggleText}>What type of coffee?</p>  <span className="arrow"></span>  </div>
                  <ul className="hide selection">

                </ul>
         <div  className="question"><p onClick={toggleText}>How much would you like?</p>  <span className="arrow"></span>  </div>
                  <ul className="hide selection">
                 
                   </ul>
        <div className="question"><p onClick={toggleText}>Want us to grind them?</p>  <span className="arrow"></span>  </div>
                  <ul className="hide section">
               
                  </ul>
        <div  className="question"><p onClick={toggleText}>How often should we deliver?</p>  <span className="arrow"></span>  </div> 
                   <ul className="hide section">
                 
                   </ul>
        
        
         {/*   {`arrow ${show ? "flip" : null }`} */}
        </section>
 </>
    )
}
