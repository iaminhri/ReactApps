import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import './Expenses.css';
import React, { useState } from "react";

const Expenses = (props) =>{

    const [selectedYear, setSelectedYear] = useState('2022');

    const changeFilterHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    
    return(
        <Card className="expenses">
            <ExpenseFilter optionVal = {selectedYear} onChangeYear = {changeFilterHandler} />
            {
                filteredExpenses.map( (expenseProp) => (
                <ExpenseItem 
                    key = {expenseProp.id} //use keys when mapping list of items in react.
                    title= {expenseProp.title} 
                    amount= {expenseProp.amount} 
                    date= {expenseProp.date} 
                />))
            }
        </Card>
    );
}

export default Expenses;