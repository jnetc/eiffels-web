export default function backToTop() {
  const btn = document.getElementById('back-to-top') as HTMLButtonElement;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'instant' }));
}
