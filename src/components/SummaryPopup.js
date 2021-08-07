import React from 'react'
import OrderSummary from "./OrderSummary"
import "./styles/summarypopup.css"
import {  Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import Logo from "../svg/Logo"

export default function SummaryPopup({selectedOption, setSelectedOption, setShowSummaryPopup, showSummaryPopup}) {
    //use onDismiss for popup closing with state
    return (
        <Dialog onDismiss={() => setShowSummaryPopup(!showSummaryPopup)} className="outside">
        <section className="popup">
        <Logo />
        <h1>Order Summary</h1>
           <OrderSummary   selectedOption={selectedOption} />
        <p className="text">
        Is this correct? You can proceed to checkout or go back to plan selection if something is off. 
        <br/>
        <br/>
        Subscription discount codes can also be redeemed at the checkout.
        </p>
        <button onClick={() => setShowSummaryPopup(!showSummaryPopup)}>Checkout</button>
        </section>
        </Dialog>
    )
}
