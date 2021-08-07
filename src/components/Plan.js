import React, {useState, useLayoutEffect} from 'react'
import "./styles/plan.css"
import PlanHowSection from './PlanHowSection'
import Options from "./Options"
import OrderSummary from './OrderSummary';
import SummaryPopup from './SummaryPopup';
import Footer from "./Footer"
export default function Plan() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
    const [selectedOption, setSelectedOption] = useState({
        One: "",
        Two: "",
        Three:"",
        Four:"", 
        Five:"",
       
    })

    const [showSummaryPopup, setShowSummaryPopup] = useState(false)

    return (
 <div className="plan">
     <section id="plan" className="plan-hero">
    <div className="side-text-plan">
    <h1>Create a Plan </h1>
    <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door. </p>
     </div>
      </section>

     <PlanHowSection />

        <Options
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
        />

      <h1 className="order-title">Order Summary</h1>
        <OrderSummary
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        />
       

        <button className="create-plan" onClick={() => setShowSummaryPopup(!showSummaryPopup)}>Create my plan!</button>

      { showSummaryPopup ? 
      <SummaryPopup showSummaryPopup={showSummaryPopup}
       setShowSummaryPopup={setShowSummaryPopup} 
       selectedOption={selectedOption} 
       /> : null}

       <Footer />
 </div>
    )
}
