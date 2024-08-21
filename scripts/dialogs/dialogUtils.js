/**
 * Закрывает диалоговое окно и возвращает возможность прокрутки страницы.
 *
 * @param {HTMLDialogElement} dialog - Элемент диалогового окна, который нужно закрыть.
 */
export function closeDialog(dialog) {
    // Удаляем стиль overflow, чтобы вернуть возможность прокрутки страницы
    document.body.removeAttribute('style');
    // Закрываем диалоговое окно
    dialog.close();
}
/**
 * Открывает диалоговое окно и блокирует прокрутку страницы.
 *
 * @param {HTMLDialogElement} dialog - Элемент диалогового окна, который нужно открыть.
 */
export function openDialog(dialog) {
    // Блокируем прокрутку страницы, добавляя стиль overflow: hidden
    document.body.style.overflow = 'hidden';
    // Открываем диалоговое окно в модальном режиме
    dialog.showModal();
}
//# sourceMappingURL=dialogUtils.js.map