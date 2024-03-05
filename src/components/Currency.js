
//import { useContext } from 'react';
//import { AppContext } from '../context/AppContext';
import React, { useState } from 'react';


export default function CurrencyMenu ()
{

    const[value, setValue] = useState('£');

    const handleChange = (event) => {
        const hello = document.getElementById("hello");
        setValue(event.target.value);
        let currencyValue = value;
        console.log(currencyValue);
        hello.innerHTML = currencyValue;
    }
    return (
   
      <div>
   
        <select onChange={handleChange}>
   
        <option value="£">£ Pound</option>

          <option value="$">$ Dollar</option>
   
          <option value="€">€ Euro</option>
          
          <option value="₹">₹ Ruppee</option>
   
        </select>
   
      </div>
   
    );
   
   };
   
   
  