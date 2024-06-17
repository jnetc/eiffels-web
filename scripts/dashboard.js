document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu
  const menuButton = document.querySelector('.btn-menu')
  const dashboard = document.querySelector('.dashboard__wrapper')

  menuButton.addEventListener('click', () => {
    dashboard.classList.toggle('hidden')
  })

})
