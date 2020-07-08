let getForm = (subFunction, parent) => {
    let budDiv = createElem('div', ['form-group'])
    let budgetLabel = createElem('label',[''], 'Budget') 
    let budget = createElem('input', ['form-control'])
    let budgetButton = createElem('button', ["btn", "btn-success"], 'Calculate Budget')
    budgetButton.addEventListener('click', subFunction('budget', budget.value))
    appendTo(budDiv, [budgetLabel, budget, budgetButton])
    let expenseDiv = createElem('div', ['form-group'])
    let expenseLabel = createElem('label',[''], 'Expense Name') 
    let expense = createElem('input', ['form-control'])
    let expenseButton = createElem('button', ["btn", "btn-danger"], 'Add Expense')
    expenseButton.addEventListener('click', subFunction('expense name', expense.value))
    appendTo(expenseDiv, [expenseLabel, expense, expenseButton])

    let expenseAmtDiv = createElem('div', ['form-group'])
    let expenseAmtLabel = createElem('label',[''], 'Expense Name') 
    let expenseAmt = createElem('input', ['form-control'])
    let expenseAmtButton = createElem('button', ["btn", "btn-danger"], 'Add Expense')
    expenseAmtButton.addEventListener('click', subFunction('expense amount', expenseAmt.value))
    appendTo(expenseAmtDiv, [expenseAmtLabel, expenseAmt, expenseAmtButton])
    
    appendTo(parent, [budDiv, expenseDiv, expenseAmtDiv])
}

let createElem = (type, elmsClass, value) => {
    let newElm =  document.createElement(type)
    if (elmsClass.length > 1)
        elmsClass.map(cls => newElm.classList.add(cls))
    if (value)
        newElm.innerText = value
    return newElm
}

let appendTo = (parent, children) => {
    children.map(child => parent.appendChild(child))
}
