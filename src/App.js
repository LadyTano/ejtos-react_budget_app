import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

import "./App.css";


// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyMenu from './components/Currency';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>

            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                                            // Budget component
                    <div className='col-2'>
                    <Budget />
                </div>
                        }        

                        {
                        //Remaining component
                        <div className='col-2'>
                            <Remaining />
                            </div>
                        }        

                        {
                        //ExpenseTotal component
                        <div className='col-2'>
                            <ExpenseTotal />
                            </div>
                        }       

                        {
                        <div className='col-3'>
                            <CurrencyMenu />
                            </div>                        }    
                       
                            <div className="w-100"></div>

                        {
                        <div className='col-sm'>
                            <ExpenseList />
                            </div>
                        }         

                        {
                        <div className='col-sm'>
                            <ExpenseItem />
                            </div>
                        }   

                        <div className="w-100"></div>     

                        {
                        <div className='col-sm'>
                        
                            <AllocationForm />
                            </div>                        }   

                                     
     

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
