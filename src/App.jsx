import { useReducer, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import './App.css'

function expenseReducer(state,action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload]
    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state
  }
}

function App() {
  const [expenses, dispatch] = useReducer(expenseReducer, [],()=> {
    const saved = localStorage.getItem('expenses')
    return saved? JSON.parse(saved) : [] 
  })

  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])

  function handleAddExpense(newExpense) {
    dispatch({type: 'ADD_EXPENSE', payload: newExpense})
  }

  function handleDeleteExpense(id) {
    dispatch({type: 'DELETE_EXPENSE', payload:id})
  }

 return (
  <div className="app">
    <h1>Expense Tracker</h1>
    <div className="main-layout">
      <div className="form-section">
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>
      <div className="list-section">
        <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      </div>
    </div>
    <ExpenseTotal expenses={expenses} />
  </div>
)

}

export default App;