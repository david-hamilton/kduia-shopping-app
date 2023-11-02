import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <CartValue></CartValue>
                </div>
                <div class="col-6">
                    <Location></Location>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ExpenseList></ExpenseList>
                </div>
            </div>
            <div class="row">
                <div class="col-7">
                    <ItemSelected></ItemSelected>
                </div>
            </div>
        </div>
        
        
        
        
    </div>
  );
}

export default App;
