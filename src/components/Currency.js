
import React from 'react';

//import { AppContext } from '../context/AppContext';
//import { useState } from 'react';

//const white = {backgroundColor: "white"};
//const lightGreen = {backgroundColor: "lightGreen"};





export default function CurrencyMenu ()
{

//const [color, setColor] = useState(true);


    const handleChange = () => {
        const currencySymbol = document.getElementById("dropdown");
        const budgetCurrency = document.getElementById("budgetCurrency");
        const remainingCurrency = document.getElementById("remainingCurrency");
        const spentCurrency = document.getElementById("spentCurrency");
        const expenseCurrency = document.getElementsByClassName("expenseCurrency");
        budgetCurrency.innerHTML = currencySymbol.value;
        remainingCurrency.innerHTML = currencySymbol.value;
        spentCurrency.innerHTML = currencySymbol.value
        expenseCurrency.innerHTML = currencySymbol.value;
    
    }   

    function MouseOver(event) {
        event.target.style.background = 'white';
        console.log("Hover")
      }
      function MouseOut(event){
        event.target.style.background="lightgreen";
      }

      const overflow =   {overflow: "hidden"};
    
    return (
        
   
      <div style={{overflow}} >
   
        <select size = "1" onMouseOver={MouseOver}  onMouseOut={MouseOut} onChange={handleChange} id = "dropdown" >
        
        <option  value="£"  >£ Pound</option>

          <option  value="$">$ Dollar</option>
   
          <option  value="€" >€ Euro</option>
          
          <option  value="₹" >₹ Ruppee</option>
   
        </select>

   
      </div>
   

   
    );
   
   };
   
   
  