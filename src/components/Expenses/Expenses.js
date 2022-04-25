import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
import ExpensesList from '../ExpensesList/ExpensesList.js';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = (props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }))

  return(
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;