
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const budgetStyle =
{

    width: "23em",
   display: "flex",
   flexWrap: "wrap",
   marginRight: 0
    
};

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
    const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
            console.log(totalExpenses);

        if(event.target.value > 20000)
        {
        alert("The Budget cannot exceed $20,000")
        console.log("too much!");   
        }
        
        else if (event.target.value < totalExpenses)
        {
            console.log("Too little");     
            alert("The Budget cannot be lower than the total expenses.")
        }

        else{
            
            //console.log(event.target.value);

            setNewBudget(event.target.value);
        }
        
    }


    return (
<div className='alert alert-secondary' style={budgetStyle}>
<div className='d-inline-block' style={{paddingRight: 5}}>Budget: </div>
<div className='d-inline-block' id='budgetCurrency' style={{paddingRight: 5}}>£</div>
<input className='d-inline-block' type="number" step="10" value={newBudget} onChange={handleBudgetChange} ></input>
</div>
    );
};
export default Budget;