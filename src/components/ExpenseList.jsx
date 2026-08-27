function ExpenseList({expenses, onDeleteExpense}){
    function handleDelete(id){
        onDeleteExpense(id)
    }
    return(
        <ul>
            {expenses.map((expense)=>(
                <li key={expense.id}>
                    {expense.description} - {expense.amount} 
                    <button type="submit"  onClick={()=>handleDelete(expense.id)}> Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default ExpenseList;