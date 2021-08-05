import React, {useState} from 'react'
import "./styles/plan.css"
import PlanHowSection from './PlanHowSection'
import Options from "./Options"
export default function Plan() {
    const [show, setShow] = useState(false)
    const [selectedOption, setSelectedOption] = useState({
        One: "",
        Two: "",
        Three:"",
        Four:"", 
        Five:"",
       
    })



    return (
 <>
     <section className="plan-hero">
    <div className="side-text-plan">
    <h1>Create a Plan </h1>
    <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door. </p>
     </div>
      </section>

     <PlanHowSection />

        <Options
        show={show}
        setShow={setShow}
        selectedOption= {selectedOption}
        setSelectedOption= {setSelectedOption}
        />
       
 </>
    )
}
