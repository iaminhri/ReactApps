//component in react is just a js function combining js, html and css.
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title); // hook -> useState returns exactly two elements

    // const clickHandler = () =>{
    //     setTitle('Updated!!!'); // onclick manipulates this data and changes the state of the following properties.
    // };
    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date = {props.date} />
            <div className="expense-item_desc">
                <h2> {props.title} </h2>
                <div className="expense-item_price"> ${props.amount} </div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
        
    );
}

export default ExpenseItem;