
import React from 'react';
import { useState } from 'react';

const white = {backgroundColor: "white"};
const lightGreen = {backgroundColor: "lightGreen"};

export default function CurrencyMenu ()
{

    const [color, setColor] = useState(lightGreen);

    const handleChange = () => {
        const currencySymbol = document.getElementById("dropdown");
        const hello = document.getElementById("hello");
        hello.innerHTML = currencySymbol.value;
        
    }

   
    
    return (
   
      <div>
   
        <select style={color} onMouseEnter={() => setColor} onChange={handleChange} id = "dropdown">
   
        <option   value="£"  >£ Pound</option>

          <option value="$">$ Dollar</option>
   
          <option value="€">€ Euro</option>
          
          <option value="₹">₹ Ruppee</option>
   
        </select>

   
      </div>
   

   
    );
   
   };
   
   
  