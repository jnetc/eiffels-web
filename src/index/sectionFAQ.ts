export default function sectionFAQ() {
  // Выбор всех элементов с классом 'faq__question'
  const faqItems = document.querySelectorAll('.faq__question') as NodeListOf<HTMLHeadingElement>;
  function collapseList(event: Event) {
    // Получаем кликнутый элемент
    const item = event.target as HTMLHeadingElement;

    // Закрываем элемент, если он открыт
    if (item.classList.contains('open-answer')) {
      item.classList.remove('open-answer');
      return;
    }

    // Закрываем все элементы, кроме кликнутого
    for (const el of faqItems) {
      if (el.classList.contains('open-answer')) {
        el.classList.remove('open-answer');
      }
    }

    // Открываем кликнутый элемент
    item.classList.add('open-answer');
  }

  // Добавляем обработчик клика к каждому элементу FAQ
  for (const item of faqItems) {
    item.addEventListener('click', collapseList);
  }
}
