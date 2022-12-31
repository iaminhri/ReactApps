import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/NewExpense/ExpenseFilter";

const App = () => {
  const expenses = [
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
      id: 'id3',
      title: 'New Laptop', 
      amount:950.01, 
      date: new Date(2022, 12, 24)
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In-App.js');
    console.log(expense);
  }

  return (
    <div className="App">
        <NewExpense onAddExpenseData = {addExpenseHandler}/>
        <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
