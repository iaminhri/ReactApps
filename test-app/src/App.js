import ExpenseItem from "./Components/ExpenseItem";

function App() {
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
  return (
    <div className="App">
        <h2> Hello Iamin </h2>
        <ExpenseItem 
          title = {expenses[0].title} 
          amount = {expenses[0].amount} 
          date = {expenses[0].date}
          >
        </ExpenseItem>

        <ExpenseItem 
          title = {expenses[1].title} 
          amount = {expenses[1].amount} 
          date = {expenses[1].date}>
        </ExpenseItem>

        <ExpenseItem
          title = {expenses[2].title} 
          amount = {expenses[2].amount} 
          date = {expenses[2].date}>
        </ExpenseItem>

        <ExpenseItem
          title = {expenses[3].title} 
          amount = {expenses[3].amount} 
          date = {expenses[3].date}>
        </ExpenseItem>
    </div>
  );
}

export default App;
