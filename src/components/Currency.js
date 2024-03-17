
import React from 'react';


//import { AppContext } from '../context/AppContext';
//import { useState } from 'react';

//const white = {backgroundColor: "white"};
//const lightGreen = {backgroundColor: "lightGreen"};

const dropdownStyle = 
{
    backgroundColor: "lightGreen",
    border: "solid",
    borderColor: "lightgreen",
    borderRadius: 4,
    width: 100,
    listStyle: "none",
    padding: 0,
    visibility: "hidden"

}
const dropdownButtonStyle = 
{
    backgroundColor: "lightGreen",
    border: "solid",
    borderColor: "lightgreen",
    width: 100,
    listStyle: "none",
    padding: 0,
    color: "white"

}

const dropdownOptions =
{
    border: "solid",
    borderColor: "lightGreen",
    borderRadius: 4,
    borderWidth: 1,
   
    
}



export default function CurrencyMenu ()
{

//const [color, setColor] = useState(true);


    const handleChange = (event) => {
        const currencySymbol = event.target.id;
        const budgetCurrency = document.getElementById("budgetCurrency");
        const remainingCurrency = document.getElementById("remainingCurrency");
        const spentCurrency = document.getElementById("spentCurrency");
        const expenseItem = document.getElementsByClassName("expenseCurrency");
        const allocationCurrency = document.getElementById("allocationCurrency");

        allocationCurrency.innerHTML = currencySymbol;
        budgetCurrency.innerHTML = currencySymbol;
        remainingCurrency.innerHTML = currencySymbol;
        spentCurrency.innerHTML = currencySymbol
    
        for(let i = 0; i <expenseItem.length; i++)
        {
            expenseItem[i].innerHTML = currencySymbol;
        } 


        hideDropdown();
    }   

    function MouseOver(event) {
        event.target.style.background = 'white';
        
      }

      function MouseOut(event){
        event.target.style.background="lightgreen";
      }

      function showDropdown()
      {
        const dropdown = document.getElementById('dropdown');
        dropdown.style.visibility="visible"

      }

      function hideDropdown()
      {
        const dropdown = document.getElementById('dropdown');
        dropdown.style.visibility="hidden"
      }

      //const overflow =   {overflow: "hidden"};

    
    return (
        <div id = "containerForDropdown">
        
    <button id='showOrHideDropdown' style={dropdownButtonStyle} onClick={showDropdown}>Currency ▼</button>

      
        <ul id='dropdown' style={dropdownStyle} >
            <li id= "£" style={dropdownOptions} onMouseEnter={MouseOver} onMouseLeave={MouseOut} onClick={handleChange}>£ Pound</li>
            <li id= "$" style={dropdownOptions} onMouseEnter={MouseOver} onMouseLeave={MouseOut} onClick={handleChange}>$ Dollar</li>
            <li id= "€" style={dropdownOptions} onMouseEnter={MouseOver} onMouseLeave={MouseOut} onClick={handleChange}>€ Euro</li>
            <li id= "₹" style={dropdownOptions} onMouseEnter={MouseOver} onMouseLeave={MouseOut} onClick={handleChange}>₹ Ruppee</li>
        </ul>

      </div>


   
    );
   
   };
   
   
  