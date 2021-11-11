const button = document.querySelector('.header-bar-toggle')
const menu = document.querySelector('.header')


function toggleClassButton () {
  button.addEventListener('click', () => {
    menu.classList.toggle('open')
  })

}

toggleClassButton()
