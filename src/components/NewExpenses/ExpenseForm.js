import { useState } from 'react/cjs/react.development'
import './NewExpenseForm.css'
const ExpenseForm = ()=>
{
const [enteredInput,setEnteredInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
})
const TitleHandler = (event)=>{
    setEnteredInput({...enteredInput,enteredTitle:event.target.value})}
 const amountHandler = (event)=>{
        setEnteredInput({...enteredInput,enteredAmount: event.target.value})
    }
const dateHandler = (event)=>{
    setEnteredInput({...enteredInput,enteredDate: event.target.value})
}
const submitHandler = (e)=>{
    e.preventDefault()
    const expenseData = enteredInput
    console.log(expenseData)
    setEnteredInput({enteredTitle:'',enteredDate:'',enteredAmount:''})


}
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredInput.enteredTitle}   onChange={TitleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredInput.enteredAmount} min="0.01" step="0.01" onChange={amountHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="Date" value={enteredInput.enteredDate} min="2019-01-01" max="2020-12-31" onChange={dateHandler}/>
            </div>
        </div>
        <div className='new-expense__action'>
            <button type='submit' >Add</button>
        </div>
    </form>)
}
export default ExpenseForm;