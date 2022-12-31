import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import './Expenses.css';
import { useState } from "react";

const Expenses = (props) =>{

    const [selectedYear, setSelectedYear] = useState('');

    const changeFilterHandler = (year) => {
        setSelectedYear(year);
        console.log(year);
    }
    
    return(
        <Card className="expenses">
            <ExpenseFilter optionVal = {selectedYear} onChangeYear = {changeFilterHandler} />

            <ExpenseItem className = "expenses"
                title = {props.expenses[0].title} 
                amount = {props.expenses[0].amount} 
                date = {props.expenses[0].date} 
            /> 

            <ExpenseItem 
                title = {props.expenses[1].title} 
                amount = {props.expenses[1].amount} 
                date = {props.expenses[1].date}
            />

            <ExpenseItem
                title = {props.expenses[2].title} 
                amount = {props.expenses[2].amount} 
                date = {props.expenses[2].date}
            />

            <ExpenseItem
                title = {props.expenses[3].title} 
                amount = {props.expenses[3].amount} 
                date = {props.expenses[3].date}
            />
        </Card>
    );
}

export default Expenses;