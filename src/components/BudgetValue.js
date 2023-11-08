import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { expenses, Location, ExpenseLimit } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{ExpenseLimit}</span>
        </div>
    );
};

export default BudgetValue;