document.addEventListener('DOMContentLoaded', () => {
  // Toggle left side menu
  const menuButton = document.querySelector('.btn-menu')
  const dashboard = document.querySelector('.dashboard__wrapper')

  menuButton.addEventListener('click', () => {
    dashboard.classList.toggle('hidden')
  })

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
