import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false); //defualt value for isEditing is false.

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseData(expenseData); // value passed to app.js
    }
    
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    return (
        <div className="new-expense">
            {
                !isEditing && (
                    <button onClick={startEditingHandler}> Add New Expense </button>
                )
            }
            {
                isEditing && (
                    <ExpenseForm
                        onSaveExpenseData={saveExpenseDataHandler} 
                        onCancel = {stopEditingHandler}
                    />
                )
            }
        </div>
    );
}

export default NewExpense;