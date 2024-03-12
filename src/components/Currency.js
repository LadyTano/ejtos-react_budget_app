
import React from 'react';
//import { useState } from 'react';

//const white = {backgroundColor: "white"};
//const lightGreen = {backgroundColor: "lightGreen"};

export default function CurrencyMenu ()
{

//const [color, setColor] = useState(true);


    const handleChange = () => {
        const currencySymbol = document.getElementById("dropdown");
        const hello = document.getElementById("hello");
        hello.innerHTML = currencySymbol.value;
        
    }

    function MouseOver(event) {
        event.target.style.background = 'white';
        console.log("Hover")
      }
      function MouseOut(event){
        event.target.style.background="lightgreen";
      }
    
    return (
   
      <div >
   
        <select size = "4" onMouseOver={MouseOver}  onMouseOut={MouseOut} onChange={handleChange} id = "dropdown" >
        
        <option  value="£"  >£ Pound</option>

          <option  value="$" onMouseOver={MouseOver} onMouseOut={MouseOut}>$ Dollar</option>
   
          <option  value="€" onMouseOver={MouseOver} onMouseOut={MouseOut}>€ Euro</option>
          
          <option  value="₹" onMouseOver={MouseOver} onMouseOut={MouseOut}>₹ Ruppee</option>
   
        </select>

   
      </div>
   

   
    );
   
   };
   
   
  