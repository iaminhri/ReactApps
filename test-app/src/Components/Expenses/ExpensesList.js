import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) =>{
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback"> Expenses Not Found !!! </h2>;
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map( (expense) => ( 
                    <ExpenseItem 
                        key = {expense.id} //use keys when mapping list of items in react.
                        title= {expense.title} 
                        amount= {expense.amount} 
                        date= {expense.date} 
                    />))
            }
        </ul>
        
    );
}

export default ExpensesList;