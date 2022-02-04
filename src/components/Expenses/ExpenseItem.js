import React, {useState} from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
// const expensedate = new Date(2021,4,23)
// const expensetitle = 'Insurance'
// const price = '3000/-'


function ExpenseItem(props) {
    
    const Clcker = ()=>{setTitle( "Updated");}

    const [title,setTitle]= useState(props.title);
    return (

    <Card className='expense-item'>
        <ExpenseDate date={props.date}/> 
        <div className='expense-item-description '>
            <h2>{title}</h2>
        <div className='expense-item-price'>{props.amount}</div>
        </div>
        <button onClick={Clcker}>Change Title</button>
    </Card>);
}

export default ExpenseItem;