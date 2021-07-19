import React from 'react'
import "./styles/howSection.css"
export default function HowSection() {
    return (
        <div className="how">
         <h2 className="how-title">How it works</h2>
         <hr></hr>
         <div className="how-cards">
        <div className="how-card">
            <h1>01</h1>
            <h2>Pick your coffee</h2>
            <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
        </div>

        <div className="how-card">
            <h1>02</h1>
            <h2>Choose the frequency</h2>
            <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
        </div>

        <div className="how-card">
            <h1>03</h1>
            <h2>Receive and enjoy!</h2>
            <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
        </div>
        </div>
        <button> Create your plan</button>
        </div>
    )
}