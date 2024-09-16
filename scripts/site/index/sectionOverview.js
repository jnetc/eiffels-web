export default function playAndPauseVideo() {
    // Находим все элементы видео на странице
    const allVideoContainers = document.querySelectorAll('.video-container');
    // Настройки для IntersectionObserver
    const options = {
        root: null, // Отслеживание происходит относительно viewport
        rootMargin: '0px', // Нет дополнительного отступа для отслеживания
        threshold: 1, // Видео будет считаться видимым, когда оно полностью в viewport
    };
    // Колбэк-функция, которая будет вызываться при пересечении видео с видимой областью (viewport)
    const callback = (entries) => {
        // Перебираем все записи пересечений
        for (const entry of entries) {
            const video = entry.target.querySelector('video'); // Получаем элемент видео, для которого было срабатывание
            // Если видео полностью в зоне видимости
            if (entry.isIntersecting) {
                // Попытка воспроизведения видео
                video.play().catch(error => console.error('Ошибка при воспроизведении видео:', error));
            }
            else {
                // Остановка видео, если оно больше не в зоне видимости
                video.pause();
            }
        }
    };
    function playAndPauseVideo(container) {
        const playPauseBtn = container.querySelector('[data-playback]');
        const video = container.querySelector('video'); // Получаем элемент видео, для которого было срабатывание
        playPauseBtn.addEventListener('click', () => {
            var _a;
            const icon = playPauseBtn.querySelector('use');
            const href = ((_a = icon.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('#')) || '';
            if (video.paused) {
                // Если видео не воспроизводится
                video.play().catch(error => console.error('Ошибка при воспроизведении видео:', error));
                playPauseBtn.setAttribute('data-playback', 'play');
                icon.setAttribute('href', `${href[0]}#pause`);
            }
            else {
                // Если видео воспроизводится
                video.pause();
                playPauseBtn.setAttribute('data-playback', 'pause');
                icon.setAttribute('href', `${href[0]}#play`);
            }
        });
    }
    function unmuteAndMuteVideo(container) {
        const soundBtn = container.querySelector('[data-sound]');
        const video = container.querySelector('video'); // Получаем элемент видео, для которого было срабатывание
        soundBtn.addEventListener('click', () => {
            var _a;
            const icon = soundBtn.querySelector('use');
            const href = ((_a = icon.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('#')) || '';
            if (video.muted) {
                // Если видео не воспроизводится
                video.muted = false;
                video.volume = 0.5;
                soundBtn.setAttribute('data-sound', 'unmute');
                icon.setAttribute('href', `${href[0]}#unmute`);
            }
            else {
                // Если видео воспроизводится
                video.muted = true;
                soundBtn.setAttribute('data-sound', 'mute');
                icon.setAttribute('href', `${href[0]}#mute`);
            }
        });
    }
    // Для каждого видео элемента на странице создаем новый наблюдатель (observer)
    for (const video of allVideoContainers) {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(video); // Наблюдаем за текущим видео элементом
        playAndPauseVideo(video);
        unmuteAndMuteVideo(video);
    }
}
//# sourceMappingURL=sectionOverview.js.map