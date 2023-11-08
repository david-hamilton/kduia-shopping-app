import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import BudgetValue from './components/BudgetValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
        <div class="container">
            <div class="row">
                <h1>Company's Budget Allocation</h1>
            </div>
            <div class="row">
                <div class="col-4">
                    <CartValue></CartValue>
                </div>
                <div class="col-4">
                    <BudgetValue></BudgetValue>
                </div>
                <div class="col-4">
                    <Location></Location>
                </div>
            </div>
            <div class="row">
                <h2>Allocation</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <ExpenseList></ExpenseList>
                </div>
            </div>
            <div class="row">
                <h2>Change Allocation</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <ItemSelected></ItemSelected>
                </div>
            </div>
        </div>
        
        
        
        
    </AppProvider>
  );
}

export default App;
