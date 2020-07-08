let render = () => {
    let parent = document.getElementById('main')
    renderContent = () => {
        let changeState = (data) => {
            state = {data}
        }
        getForm(changeState, parent)
        getDisplay(state)
    }
    return renderContent
}