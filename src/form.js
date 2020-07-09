let getForm = (subFunction, parent) => {
    let formLi = createElem('div', ['container', 'row'])
    let budDiv = createElem('div', ['form-group', 'col-sm-2'])
    let budgetLabel = createElem('label',[''], 'Budget') 
    let budget = createElem('input', ['form-control'])
    let budgetButton = createElem('button', ["btn", "btn-success"], 'Calculate Budget\t')
    budgetButton.addEventListener('click', event => {
        subFunction('budget', budget.value)
        budget.value = ''
        
    })
    appendTo(budDiv, [budgetLabel, budget, budgetButton])
    let expenseDiv = createElem('div', ['form-group', 'col-sm-2'])
    let expenseLabel = createElem('label',[''], 'Expense Name\t') 
    let expense = createElem('input', ['form-control'])
    let expenseAmtLabel = createElem('label',[''], 'Expense Amount\t') 
    let expenseAmt = createElem('input', ['form-control'])
    let expenseAmtButton = createElem('button', ["btn", "btn-danger"], 'Add Expense')
    expenseAmtButton.addEventListener('click', event => {
        subFunction('expense_amount',[expense.value, expenseAmt.value])
        expense.value = ''
        expenseAmt.value = ''
        
    })
    appendTo(expenseDiv, [expenseLabel, expense, expenseAmtLabel, expenseAmt, expenseAmtButton])
    appendTo(formLi, [expenseDiv, budDiv] )
    appendTo(parent, [formLi])
}


