import { useState } from "react";

function ExpenseForm({onAddExpense}){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e){
        e.preventDefault()

        if(amount<=0 || description.trim()===""){
            setError('please enter a valid description and amount')
            return
        }

        setError('')
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
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Add expense</button>
        </form>
    )
}

export default ExpenseForm;