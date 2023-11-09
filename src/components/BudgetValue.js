import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { Location, ExpenseLimit } = useContext(AppContext);
    
    return (
        <div className='alert alert-primary'>
            <span>Budget Limit: {Location}{ExpenseLimit}</span>
        </div>
    );
};

export default BudgetValue;