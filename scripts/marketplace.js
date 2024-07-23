document.addEventListener('DOMContentLoaded', () => {
  // Add new materials, workers and jobs
  const addNewButton = document.getElementById('btn-add')
  const dialog = document.getElementById('mp-dialog')
  const btnListVacancies = document.getElementById('list_vacancies')
  const btnSupplyServices = document.getElementById('supply_services')
  const btnSellMaterials = document.getElementById('sell_materials')

  // Search form and button
  const searchForm = document.getElementById('search__form')
  const searchInput = document.getElementById('search__input')
  const searchSubmit = document.getElementById('search__submit')
  let searchValue = ''


  dialog.querySelector('#dialog__close-btn').addEventListener('click', () => {
    dialog.close()
  })

  addNewButton.addEventListener('click', () => {
    dialog.showModal()
  })

  btnListVacancies.addEventListener('click', () => {
    console.log('handle vacancies');
  })

  btnSupplyServices.addEventListener('click', () => {
    console.log('handle services');
  })

  btnSellMaterials.addEventListener('click', () => {
    console.log('handle materials');
  })


  // Функция дебаунсинга
  // function debounce(func, wait) {
  //   let timeout;
  //   return function(...args) {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func.apply(this, args), wait);
  //   };
  // }
  // Обработчик события для поля ввода
  // const handleInput = (event) => {
  //   if (event.target.value.length > 0) {
  //     searchSubmit.classList.add('show');
  //   } else {
  //     searchSubmit.classList.remove('show');
  //   }
  //   searchValue = event.target.value;
  //   console.log('searchValue', searchValue);
  // };

  // Оберните обработчик в функцию дебаунсинга с интервалом 5 секунд
  // const debouncedHandleInput = debounce(handleInput, 500);
  // searchInput.addEventListener('input', debouncedHandleInput);

  searchInput.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
      searchSubmit.classList.add('show');
    } else {
      searchSubmit.classList.remove('show');
    }
    searchValue = event.target.value;
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('send request', searchValue);
    searchInput.value = ''
    searchSubmit.classList.remove('show')
  })


})
