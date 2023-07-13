let button = document.getElementsByTagName('button')[0] 

button.addEventListener('click', clickOnButton) 

function clickOnButton(e) {
    const currentTarget = e.currentTarget 
    const textTarget = currentTarget.textContent

    currentTarget.textContent = Number(textTarget) + 1 

    button.removeEventListener('click', clickOnButton)
}




