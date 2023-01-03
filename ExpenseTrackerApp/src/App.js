import React, {useState} from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/NewExpense/ExpenseFilter";

const DUMMY_EXPENSES = [
  {
    id: 'id1',
    title: 'Car Insurance', 
    amount: 254.34, 
    date: new Date(2021, 2, 28)
  },
  {
    id: 'id2',
    title: 'New Gym Gear', 
    amount: 200.67, 
    date: new Date(2022, 4, 15)
  },
  {
    id: 'id3',
    title: 'New Monitors', 
    amount:150.34, 
    date: new Date(2022, 8, 28)
  },
  {
    id: 'id4',
    title: 'New Laptop', 
    amount:950.01, 
    date: new Date(2022, 12, 24)
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); // array destructuring.
  
  const addExpenseHandler = (expense) => {
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
        <NewExpense onAddExpenseData = {addExpenseHandler}/>
        <Expenses items = {expenses} />
    </div>
  );
}

export default App;
