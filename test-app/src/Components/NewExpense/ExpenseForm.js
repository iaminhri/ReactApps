import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {     // @param event -> monitors everything happening within the DOM 
        setEnteredTitle(event.target.value);    //gets the targeted value of the following event occuring in the respective form
    };
    const amountChangeHandler = (event) => {    //@param event -> monitors everything happening within the DOM 
        setEnteredAmount(event.target.value);   //gets the amount entered within the form   
    };
    const dateChangeHandler = (event) =>{       //@param event -> monitors everything happening within the DOM 
        setEnteredDate(event.target.value);     //gets the date value from date form input field
    }

    //------------------------------------------------------Alternate Approach------------------------------------------------------------//

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    // const titleChangeHandler = (event) => {     // @param event -> monitors everything happening within the DOM 
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value};
    //     });    //gets the targeted value of the following event occuring in the respective form
    // };
    // const amountChangeHandler = (event) => {    //@param event -> monitors everything happening within the DOM 
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount: event.target.value};
    //     });   //gets the amount entered within the form   
    // };
    // const dateChangeHandler = (event) =>{       //@param event -> monitors everything happening within the DOM 
    //     //gets the date value from date form input field
    //     setUserInput((prevState) => {
    //         // copies preivous object values into new object
    //         // overwrites the current object properties.
    //          return {...prevState, enteredDate: event.target.value};
    //     });
    // };

    //---------------------------------------------------------------x--------------------------------------------------------------------//

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" onChange={titleChangeHandler}/> {/*OnChange executes the handler function*/}
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                 <button type='submit'> Add Expense </button>
            </div>
        </form>
    )
};

export default ExpenseForm;