import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangedHandler} selected={filteredYear} />
        <ExpensesChart expenses={filterExpenses} />
        {filterExpenses.length === 0 ? <p className='expenses-list__fallback'>Found no expenses.</p>
          : filterExpenses.map(expense => (
            <ul className='expenses-list' key={expense.id}>
              <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            </ul>
          )
          )}
      </Card>
    </li>
  )
}

export default Expenses;