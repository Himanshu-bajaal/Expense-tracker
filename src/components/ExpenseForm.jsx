import { useState } from "react";

function ExpenseForm({onAddExpense}){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        const newExpense = {
            id: Date.now(),
            description,
            amount: Number(amount),
        }
        onAddExpense(newExpense)
        setDescription('')
        setAmount('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="description"
                   value={description}
                   onChange={(e)=> setDescription(e.target.value)} 
            />
            <input type="number"
                   placeholder="Add amount"
                   value={amount}
                   onChange={(e)=> setAmount(e.target.value)} 
            />
            <button type="submit">Add expense</button>
        </form>
    )
}

export default ExpenseForm;