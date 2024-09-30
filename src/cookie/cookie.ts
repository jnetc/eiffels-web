document.addEventListener('DOMContentLoaded', async () => {
  // Динамически импортируем функцию setCookie из файла setCookie.js
  const { default: setCookie } = await import('./setCookie.js');

  // Получаем элемент с классом "cookie" из DOM
  const cookieElement = document.querySelector('.cookie') as HTMLDivElement;

  // Получаем кнопки для принятия и отклонения cookies по их ID
  const declineCookieBtn = document.getElementById('cookie-decline');
  const acceptCookieBtn = document.getElementById('cookie-accept');

  // Функция для получения куки по имени
  function getCookie(name: string) {
    return document.cookie.match(name)?.[0] || null;
  }

  // Проверяем наличие куки 'accepted' или 'declined'
  const isAccepted = getCookie('accepted');
  const isDeclined = getCookie('declined');

  // Проверяем, есть ли в документе уже установленные cookies
  if (isAccepted || isDeclined) {
    // Если cookie существует, удаляем элемент с информацией о cookie из DOM
    cookieElement.remove();
    return;
  }

  // Добавляем обработчик событий для кнопки принятия cookies
  // Устанавливаем cookie "accepted" с значением "1" на 1 день
  acceptCookieBtn?.addEventListener('click', () => setCookie('accepted', '1', 1));

  // Добавляем обработчик событий для кнопки отклонения cookies
  // Устанавливаем cookie "declined" с значением "1" на очень короткий срок (около 1.44 минут)
  declineCookieBtn?.addEventListener('click', () => setCookie('declined', '1', 0.001));
});
