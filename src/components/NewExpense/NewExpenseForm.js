import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // Preventing the browser to refresh on submitting the form.
    event.preventDefault();

    // Creating an object to store all entered data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    // Keeping the object in onSaveExpenseData function
    props.onSaveExpenseData(expenseData);

    // Clearing all the inputs after form submission with the help of useState functions and react two way data binding by adding value property with all the inputs we are listening to.
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={ submitHandler }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={ enteredTitle } onChange={ titleChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={ enteredAmount } onChange={ amountChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={ enteredDate } min="2022-04-25" max = "2022-05-25" onChange={ dateChangeHandler }/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default NewExpenseForm;