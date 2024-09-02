export default function backToTop() {
    const btn = document.getElementById('back-to-top');
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'instant' }));
}
//# sourceMappingURL=backToTop.js.map