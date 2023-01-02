import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import './Expenses.css';
import React, { useState } from "react";

const Expenses = (props) =>{

    const [selectedYear, setSelectedYear] = useState('2020');

    const changeFilterHandler = (year) => {
        setSelectedYear(year);
        console.log(year);
    }
    
    return(
        <Card className="expenses">
            <ExpenseFilter optionVal = {selectedYear} onChangeYear = {changeFilterHandler} />
            
            {
                props.items.map( (expenseProp) => (
                <ExpenseItem 
                    title={expenseProp.title} 
                    amount={expenseProp.amount} 
                    date={expenseProp.date}
                />))
            }
        </Card>
    );
}

export default Expenses;