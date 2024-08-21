export default function errorMessage(parent: HTMLElement | null, message?: string) {
  const container = document.createElement('div');
  const errorMessage = document.createElement('strong');
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  container.setAttribute('class', 'error-message');
  container.setAttribute('role', 'alert');
  container.setAttribute('aria-live', 'assertive');
  icon.setAttribute('class', 'icon');
  icon.setAttribute('aria-hidden', 'true');
  iconPath.setAttribute('href', 'public/svg/ui_icons.svg#warning');

  errorMessage.textContent = message || 'Sorry, there was an internal server';
  icon.appendChild(iconPath);
  container.appendChild(icon);
  container.appendChild(errorMessage);

  const hasErorMessage = document.querySelector('.error-message');

  if (parent && hasErorMessage) return;

  if (hasErorMessage) {
    hasErorMessage.classList.remove('show');
    const timer = setTimeout(() => {
      hasErorMessage.remove();
      clearTimeout(timer);
    }, 500);
    return;
  }

  if (!parent) return;

  parent.insertAdjacentElement('afterbegin', container);
  const timer = setTimeout(() => {
    container.classList.add('show');
    clearTimeout(timer);
  }, 100);
}
