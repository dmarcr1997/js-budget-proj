let render = () => {
    let parent = document.getElementById('main')
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
            debugger
        }
        getForm(changeState, parent)
        getDisplay(state)
    }
    return renderContent
}