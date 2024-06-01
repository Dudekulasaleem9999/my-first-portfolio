const hamburgerButton = document.querySelector('.hamburger')
const hamburgerList = document.querySelector('.list-container')

hamburgerButton.addEventListener('click', () => {
    hamburgerList.classList.toggle('hidden')
})
