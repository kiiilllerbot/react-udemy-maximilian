import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = () => {

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


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={ titleChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={ amountChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-04-25" max = "2022-05-25" onChange={ dateChangeHandler }/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default NewExpenseForm;