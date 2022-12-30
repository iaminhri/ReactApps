import './ExpenseDate.css';
import Card from './Card';

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <Card className="expense-date"> 
            <div className="expense-date_month"> {month} </div>
            <div className="expense-date_day"> {day} </div>
            <div className="expense-date_year"> {year} </div>
        </Card>
    );
}

export default ExpenseDate;