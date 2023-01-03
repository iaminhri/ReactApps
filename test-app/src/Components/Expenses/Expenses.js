import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';


const Expenses = (props) =>{

    const [selectedYear, setSelectedYear] = useState('2022');

    const changeFilterHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.items.filter( expenseParam => {
        return expenseParam.date.getFullYear().toString() === selectedYear;
    });

    return(
        <Card className="expenses"> 
            <ExpenseFilter optionVal = {selectedYear} onChangeYear = {changeFilterHandler} />

            <ExpensesChart expenses={filteredExpenses} />

            { <ExpensesList items = {filteredExpenses} /> }
        </Card>
    );
}

export default Expenses;