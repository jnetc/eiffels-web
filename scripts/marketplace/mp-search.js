document.addEventListener('DOMContentLoaded', () => {
	// Search form and button
	const searchForm = document.getElementById('search__form');
	const searchInput = document.getElementById('search__input');
	const searchSubmit = document.getElementById('search__submit');
	let searchValue = '';

	// Handle search input and submit
	searchInput.addEventListener('input', event => {
		if (event.target.value.length > 0) {
			searchSubmit.classList.add('show');
		} else {
			searchSubmit.classList.remove('show');
		}
		searchValue = event.target.value;
	});

	searchForm.addEventListener('submit', event => {
		event.preventDefault();
		console.log('send request', searchValue);
		searchInput.value = '';
		searchSubmit.classList.remove('show');
	});

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

	// Обработчик дебаунсинга с интервалом 5 секунд
	// const debouncedHandleInput = debounce(handleInput, 500);
	// searchInput.addEventListener('input', debouncedHandleInput);
});
