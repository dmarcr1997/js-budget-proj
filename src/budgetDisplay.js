let getDisplay = (budget, expenseContainer, state) => {

  budget.innerText = state.budget
  let expns =  [...new Set(state.expenses)]
  expns.map(exp => {
      let li = createElem('li', [''])
      li.innerText = `${exp[0]}: $ ${exp[1]}`
      expenseContainer.appendChild(li)
  })
}
