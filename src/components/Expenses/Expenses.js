import { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return(
    <div className="expenses">
      <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </div>
      <ExpenseItem
        title={ props.expenses[0].title }
        amount={ props.expenses[0].amount }
        date={ props.expenses[0].date }
      />
      <ExpenseItem
        title={ props.expenses[1].title}
        amount={ props.expenses[1].amount }
        date={ props.expenses[1].date }
      />
      <ExpenseItem
        title={ props.expenses[2].title }
        amount={ props.expenses[2].amount }
        date={ props.expenses[2].date }
      />
      <ExpenseItem
        title={ props.expenses[3].title }
        amount={ props.expenses[3].amount }
        date= { props.expenses[3].date }
      />
    </div>
  )
}

export default Expenses;