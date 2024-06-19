document.addEventListener('DOMContentLoaded', () => {

  // Toggle left side menu
  const menuButton = document.querySelector('.btn-menu')
  const app = document.querySelector('.app__wrapper')

  menuButton.addEventListener('click', () => {
    app.classList.toggle('hidden')
  })

  // Change active state of filter buttons
  const filterButtons = document.querySelectorAll('.fm-filters__btn')

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-selected')) {
        return
      }

      filterButtons.forEach((btn) => btn.classList.remove('btn-selected'))
      button.classList.add('btn-selected')
    })
  })

})
