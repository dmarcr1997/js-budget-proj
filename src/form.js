let getForm = (subFunction, parent) => {
    let formLi = createElem('div', ['container'])
    let budDiv = createElem('div', ['form-group'])
    let budgetLabel = createElem('label',[''], 'Budget') 
    let budget = createElem('input', ['form-control'])
    let budgetButton = createElem('button', ["btn", "btn-success"], 'Calculate Budget')
    budgetButton.addEventListener('click', event => {
        subFunction('budget', budget.value)
        budget.value = ''
        
    })
    appendTo(budDiv, [budgetLabel, budget, budgetButton])
    let expenseDiv = createElem('div', ['form-group'])
    let expenseLabel = createElem('label',[''], 'Expense Name') 
    let expense = createElem('input', ['form-control'])
    appendTo(expenseDiv, [expenseLabel, expense])
    let expenseAmtDiv = createElem('div', ['form-group'])
    let expenseAmtLabel = createElem('label',[''], 'Expense Name') 
    let expenseAmt = createElem('input', ['form-control'])
    let expenseAmtButton = createElem('button', ["btn", "btn-danger"], 'Add Expense')
    expenseAmtButton.addEventListener('click', event => {
        subFunction('expense_amount',[expense.value, expenseAmt.value])
        expense.value = ''
        expenseAmt.value = ''
        
    })
    appendTo(expenseAmtDiv, [expenseAmtLabel, expenseAmt, expenseAmtButton])
    appendTo(formLi, [budDiv, expenseDiv, expenseAmtDiv] )
    appendTo(parent, [formLi])
}


