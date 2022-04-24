import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = () => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      // Copy all entered inputs
      ...userInput,
      enteredTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      // Copy all entered inputs
      ...userInput,
      enteredAmount: event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      // Copy all entered inputs
      ...userInput,
      enteredDate: event.target.value
    });
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