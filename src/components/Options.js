import React from 'react'

export default function Options({show, setShow, selectedOption, setSelectedOption}) {
    function toggleText(e) {
        setShow(!show);
        let sibiling = e.target.nextElementSibling
        sibiling.classList.toggle("flip")
        sibiling.parentNode.nextElementSibling.classList.toggle("hide")
        }
        
        //not saving multiple numbers only one at a time
        function oneSelect(e) {
            let coffeeMethod = e.target.getAttribute("data-coffee-method");
         if(selectedOption.One === coffeeMethod) {
             setSelectedOption({...selectedOption, One:""})
         } else{
           setSelectedOption({...selectedOption, One:coffeeMethod})
        }
     }
              
         
        

        function twoSelect(e) {
            let coffeeType = e.target.getAttribute("data-coffee-type");
         if(selectedOption.Two === coffeeType) {
             setSelectedOption({...selectedOption, Two:""})
         } else{
           setSelectedOption({...selectedOption, Two:coffeeType})
         }
        }

        function threeSelect(e) {
            let coffeeAmount = e.target.getAttribute("data-coffee-amount");
         if(selectedOption.Three === coffeeAmount) {
             setSelectedOption({...selectedOption, Three: ""})
         } else{
           setSelectedOption({...selectedOption, Three: coffeeAmount})
         }
        }

        function fourSelect(e) {
            let coffeeGrind = e.target.getAttribute("data-coffee-grind");
         if(selectedOption.Four === coffeeGrind) {
             setSelectedOption({...selectedOption, Four: ""})
         } else{
           setSelectedOption({...selectedOption, Four: coffeeGrind})
         }
        }

        function fiveSelect(e) {
            let coffeeFrequency = e.target.getAttribute("data-coffee-frequency");
         if(selectedOption.Five === coffeeFrequency) {
             setSelectedOption({...selectedOption, Five: ""})
         } else{
           setSelectedOption({...selectedOption, Five: coffeeFrequency})
         }
        }
    return (
        <>
             <section className="option-section">
        <div  className="question"> <p onClick={toggleText}>How do you drink your coffee?</p>  <span className="arrow"></span></div>  
                 <ul className="hide selection">
                    <li onClick={oneSelect} data-coffee-method="Capsule" className={selectedOption.One === "Capsule" ? "selected" : null}> 
                        <h1>Capsule</h1>
                        <p>Compatible with Nespresso systems and similar brewers</p>
                    </li>
                    <li onClick={oneSelect} data-coffee-method="Filter" className={selectedOption.One === "Filter" ? "selected" : null}> 
                        <h1>Filter</h1>
                        <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                    </li>
                    <li onClick={oneSelect} data-coffee-method="Expresso" className={selectedOption.One === "Expresso" ? "selected" : null} > 
                        <h1>Expresso</h1>
                        <p>Dense and finely ground beans for an intense, flavorful experience</p>
                    </li>
                 </ul> 
        <div  className="question"><p onClick={toggleText}>What type of coffee?</p>  <span className="arrow"></span>  </div>
                  <ul className="hide selection">
                  <li onClick={twoSelect} data-coffee-type="Single Origin" className={selectedOption.Two === "Single Origin" ? "selected" : null}> 
                        <h1>Single Origin</h1>
                        <p>Distinct, high quality coffee from a specific family-owned farm</p>
                    </li>
                    <li onClick={twoSelect} data-coffee-type="Decaf" className={selectedOption.Two === "Decaf" ? "selected" : null}> 
                        <h1>Decaf</h1>
                        <p>Just like regular coffee, except the caffeine has been removed</p>
                    </li>
                    <li onClick={twoSelect} data-coffee-type="Blended" className={selectedOption.Two === "Blended" ? "selected" : null}> 
                        <h1>Blended</h1>
                        <p>Combination of two or three dark roasted beans of organic coffees</p>
                    </li>
                </ul>
         <div  className="question"><p onClick={toggleText}>How much would you like?</p>  <span className="arrow"></span>  </div>
                  <ul className="hide selection">
                  <li onClick={threeSelect} data-coffee-amount="250g" className={selectedOption.Three === "250g" ? "selected" : null}> 
                        <h1>250g</h1>
                        <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                    </li>
                    <li onClick={threeSelect} data-coffee-amount="500g" className={selectedOption.Three === "500g" ? "selected" : null}> 
                        <h1>500g</h1>
                        <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
                    </li>
                    <li onClick={threeSelect} data-coffee-amount="1000g" className={selectedOption.Three === "1000g" ? "selected" : null}> 
                        <h1>1000g</h1>
                        <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
                    </li>
                   </ul>
        <div className="question"><p onClick={toggleText}>Want us to grind them?</p>  <span className="arrow"></span>  </div>
                  <ul className="hide section">
                  <li onClick={fourSelect} data-coffee-grind="Wholebean" className={selectedOption.Four === "Wholebean" ? "selected" : null}> 
                        <h1>Wholebean</h1>
                        <p>Best choice if you cherish the full sensory experience</p>
                    </li>
                    <li onClick={fourSelect} data-coffee-grind="Filter" className={selectedOption.Four === "Filter" ? "selected" : null}> 
                        <h1>Filter</h1>
                        <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                    </li>
                    <li onClick={fourSelect} data-coffee-grind="Cafetiére" className={selectedOption.Four === "Cafetiére" ? "selected" : null}> 
                        <h1>Cafetiére</h1>
                        <p>Course ground beans specially suited for french press coffee</p>
                    </li>
                  </ul>
        <div  className="question"><p onClick={toggleText}>How often should we deliver?</p>  <span className="arrow"></span>  </div> 
                   <ul className="hide section">
                   <li onClick={fiveSelect} data-coffee-frequency="Every week" className={selectedOption.Five === "Every week" ? "selected" : null}> 
                        <h1>Every week</h1>
                        <p>per shipment. Includes free first-class shipping.</p>
                    </li>
                    <li onClick={fiveSelect} data-coffee-frequency="Every two weeks" className={selectedOption.Five === "Every two weeks" ? "selected" : null}> 
                        <h1>Every two weeks</h1>
                        <p>per shipment. Includes free priority shipping.</p>
                    </li>
                    <li onClick={fiveSelect} data-coffee-frequency="Every month" className={selectedOption.Five === "Every month" ? "selected" : null}> 
                        <h1>Every Month</h1>
                        <p>per shipment. Includes free priority shipping.</p>
                    </li>
                   </ul>
        
        
         {/*   {`arrow ${show ? "flip" : null }`} */}
        </section>
        </>
    )
}
