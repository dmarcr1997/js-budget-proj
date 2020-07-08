let render = () => {
    let parent = document.getElementById('main')
    parent.classList.add('container')
    state = {
        'budget': 0,
        'expenses': []
    }
    renderContent = () => {
        let changeState = (type, data) => {
            if (data != ''){
                if (type == 'budget'){
                    state['budget'] = data
                } else{
                    state['expenses'].push(data)
                }
            }
            console.log(state)
            getDisplay(budgetDis, expensesDis, state)
        }
        getForm(changeState, parent)
        let budgetDis = createElem('h3', [''])
        budgetDis.innerText = state.budget
        let moneyBag = document.createElement('img')
        moneyBag.src = "https://img.icons8.com/dotty/80/000000/money-bag-shekel-.png"
        let expensesDis = createElem('ul', [''])
        let expnsRep = document.createElement('img')
        expnsRep.src = "https://img.icons8.com/pastel-glyph/64/000000/transaction-list--v5.png"
        expensesDis.innerText = state.expenses

        appendTo(parent, [budgetDis, moneyBag, expensesDis, expnsRep])
    }
    return renderContent
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