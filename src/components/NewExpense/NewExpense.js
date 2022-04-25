import NewExpenseForm from './NewExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Creating object to hold expense data
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    // Sending expense data to App component through onAddExpense function
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
    </div>
  )
}

export default NewExpense;