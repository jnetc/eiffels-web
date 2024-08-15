document.addEventListener("DOMContentLoaded", async () => {
	// Получаем все элементы <dialog> на странице
	const dialogs = document.querySelectorAll("dialog");

	// Динамически импортируем модуль, содержащий функцию closeDialog
	const { closeDialog } = await import("./dialogUtils.js");

	// Проходимся по каждому найденному элементу <dialog>
	for (const dialog of dialogs) {
		// Ищем элемент внутри <dialog>, который имеет атрибут [data-button-close]
		// и добавляем обработчик события клика
		dialog
			.querySelector("[data-button-close]")
			?.addEventListener("click", () => {
				// При клике вызываем функцию closeDialog, передавая ей текущий <dialog>
				closeDialog(dialog);
			});
	}
});
