let render = () => {
    let parent = document.getElementById('main')
    parent.classList.add('container')
    state = {
        'budget': 0,
        'expenses': [],
        'balance': 0
    }
    renderContent = () => {
        let changeState = (type, data) => {
            if (data != '' ){
                if (type == 'budget'){
                    state['budget'] = data
                    state.balance= data 
                    getDisplay(budgetDis, expensesDis, balance, state)
                } else{
                    if(data[0] != "" && data[1] != "" ){
                        state.balance -= parseFloat(data[1])
                        state['expenses'].push(data)
                        getDisplay(budgetDis, expensesDis, balance, state)
                    }
                }
                
            }
            console.log(state)
        }
        getForm(changeState, parent)
        let budgetHead = createElem('h2', [''])
        budgetHead.innerText ='Budget'
        let budgetDis = createElem('h3', [''])
        budgetDis.innerText = state.budget
        let moneyBag = document.createElement('img')
        moneyBag.src = "https://img.icons8.com/dotty/80/000000/money-bag-shekel-.png"
        
        let expenseHead = createElem('h2', [''])
        expenseHead.innerText ='Expenses'
        let expensesDis = createElem('ul', [''])
        let expnsRep = document.createElement('img')
        expnsRep.src = "https://img.icons8.com/pastel-glyph/64/000000/transaction-list--v5.png"
        expensesDis.innerText = state.expenses
        
        let balanceHead = createElem('h2', [''])
        balanceHead.innerText ='Balance'
        let balance = createElem('h3', [''])
        balance.innerText = state.balance
        let balRep = document.createElement('img')
        balRep.src = "https://img.icons8.com/pastel-glyph/64/000000/invoice-1.png"
        appendTo(parent, [budgetHead, moneyBag, budgetDis, expenseHead, expnsRep, expensesDis, balanceHead, balRep, balance])
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