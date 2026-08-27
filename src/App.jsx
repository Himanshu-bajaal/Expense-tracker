import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import './App.css'

function App() {
  const [expenses, setExpenses] = useState(()=> {
    const saved = localStorage.getItem('expenses')
    return saved? JSON.parse(saved) : [] 
  })

  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense])
  }

  function handleDeleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div className="App">
      <h1>Expense tracker</h1>
      
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      <ExpenseTotal expenses={expenses}/>
    </div>
  )
}

export default App;