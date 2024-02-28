
//import { useContext } from 'react';
//import { AppContext } from '../context/AppContext';
import React, { useState } from 'react';


export default function CurrencyMenu ()
{

    const[value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    }
    return (
   
      <div>
   
        <select onChange={handleChange}>
   
          <option value="$">$ Dollar</option>
   
          <option value="£">£ Pound</option>
   
          <option value="€">€ Euro</option>
          
          <option value="₹">₹ Ruppee</option>
   
        </select>
   
      </div>
   
    );
   
   };
   
   
  