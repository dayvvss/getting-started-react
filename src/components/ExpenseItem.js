import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
// const expensedate = new Date(2021,4,23)
// const expensetitle = 'Insurance'
// const price = '3000/-'


function ExpenseItem(props) {
    
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/> 
        <div className='expense-item-description '>
            <h2>{props.title}</h2>
        <div className='expense-item-price'>{props.amount}</div>
        </div>
    </div>);
}

export default ExpenseItem;