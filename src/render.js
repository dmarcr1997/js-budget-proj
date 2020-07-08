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
            getDisplay(budget, state)
        }
        getForm(changeState, parent)
        let budget = createElem('h3', [''])
        budget.innerText = state.budget
        let moneyBag = document.createElement('img')
        moneyBag.src = "https://img.icons8.com/dotty/80/000000/money-bag-shekel-.png"
        appendTo(parent, [budget, moneyBag])
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