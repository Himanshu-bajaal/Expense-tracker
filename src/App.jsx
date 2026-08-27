import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList";
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense])
  }

  return (
    <div className="App">
      <h1>Expense tracker</h1>
      
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App;