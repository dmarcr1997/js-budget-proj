let render = () => {
    let parent = document.getElementById('main')
    parent.classList.add('container')
    let headContainer = createElem('div', ['headDisp'])
    let header = createElem('h1', [''])
    header.innerText='Budget Tracker'
    appendTo(headContainer, [header])
    appendTo(parent, [headContainer])
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
                    if (state.balance >= 0)
                        state.balance= data
                    else
                        state.balance += parseFloat(data)
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
        let display = createElem('div', ['row'])
        let budDiv = createElem('div', ['container', 'col-sm-4'])
        let budgetHead = createElem('h2', ['card-body'])
        budgetHead.innerText ='Budget'
        let budgetDis = createElem('h3', ['card-body'])
        budgetDis.innerText = state.budget
        let moneyBag = document.createElement('img')
        moneyBag.src = "https://img.icons8.com/dotty/80/000000/money-bag-shekel-.png"
        appendTo(budDiv, [budgetHead, moneyBag, budgetDis])

        let expenDiv = createElem('div', ['container', 'col-sm-4'])
        let expenseHead = createElem('h2', ['card-body'])
        expenseHead.innerText ='Expenses'
        let expensesDis = createElem('ul', ['card-body'])
        let expnsRep = document.createElement('img')
        expnsRep.src = "https://img.icons8.com/pastel-glyph/64/000000/transaction-list--v5.png"
        expensesDis.innerText = '~'
        appendTo(expenDiv, [expenseHead, expnsRep, expensesDis])

        let balDiv = createElem('div', ['container', 'col-sm-4'])
        let balanceHead = createElem('h2', ['card-body'])
        balanceHead.innerText ='Balance'
        let balance = createElem('h3', ['card-body'])
        balance.innerText = state.balance
        let balRep = document.createElement('img')
        balRep.src = "https://img.icons8.com/pastel-glyph/64/000000/invoice-1.png"
        appendTo(balDiv, [balanceHead,  balRep, balance])

        appendTo(display, [budDiv, expenDiv, balDiv])
        appendTo(parent, [display])
    }
    return renderContent
}

let createElem = (type, elmsClass, value) => {
    let newElm =  document.createElement(type)
    if (elmsClass[0] != "")
        elmsClass.map(cls => newElm.classList.add(cls))
    if (value)
        newElm.innerText = value
    return newElm
}

let appendTo = (parent, children) => {
    children.map(child => parent.appendChild(child))
}