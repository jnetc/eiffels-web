"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Получаем все элементы <dialog> на странице
    const dialogs = document.querySelectorAll('dialog');
    // Динамически импортируем модуль, содержащий функцию closeDialog
    const { closeDialog } = await import('./dialogUtils.js');
    // Проходимся по каждому найденному элементу <dialog>
    for (const dialog of dialogs) {
        // Ищем элемент внутри <dialog>, который имеет атрибут [data-button="close"]
        // и добавляем обработчик события клика
        const closeBtn = dialog.querySelector('[data-button="close"]');
        if (!closeBtn)
            throw new Error('Close button not found');
        closeBtn.addEventListener('click', () => {
            // При клике вызываем функцию closeDialog, передавая ей текущий <dialog>
            closeDialog(dialog);
        });
    }
});
//# sourceMappingURL=dialog.js.map