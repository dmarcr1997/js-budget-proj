let getDisplay = (budget, expenseContainer, bal, state) => {

  budget.innerText = state.budget
  let expns =  [...new Set(state.expenses)]
  expenseContainer.innerHTML= ''
  expns.map(exp => {
      let li = createElem('li', [''])
      li.innerText = `${exp[0]}: $ ${exp[1]}`
      expenseContainer.appendChild(li)
  })
  bal.innerText = state.balance
}
