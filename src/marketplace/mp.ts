document.addEventListener('DOMContentLoaded', () => {
  // Получаем элемент <select> с идентификатором "navigation-select"
  const navigationSelect = document.getElementById('navigation-select') as HTMLSelectElement;

  // Проверяем, что элемент существует
  if (navigationSelect) {
    // Добавляем обработчик события "change" на элемент <select>
    navigationSelect.addEventListener('change', function () {
      // Если значение элемента не пустое
      if (this.value) {
        // Перенаправляем пользователя на URL, указанный в значении <select>
        window.location.href = this.value;
      }
    });
  }
});
