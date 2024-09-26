export default function playAndPauseVideo() {
  // Находим все элементы видео на странице
  const allVideoContainers = document.querySelectorAll('.video-container') as NodeListOf<HTMLDivElement>;

  // Настройки для IntersectionObserver
  const options = {
    root: null, // Отслеживание происходит относительно viewport
    rootMargin: '0px', // Нет дополнительного отступа для отслеживания
    threshold: 0.5, // Видео будет считаться видимым, когда оно полностью в viewport
  };

  // Колбэк-функция, которая будет вызываться при пересечении видео с видимой областью (viewport)
  const callback = (entries: IntersectionObserverEntry[]) => {
    // Перебираем все записи пересечений
    for (const entry of entries) {
      const video = entry.target.querySelector('video') as HTMLVideoElement; // Получаем элемент видео, для которого было срабатывание

      // Если видео полностью в зоне видимости
      if (entry.isIntersecting) {
        // Попытка воспроизведения видео
        video.play().catch(error => console.error('Ошибка при воспроизведении видео:', error));
      } else {
        // Остановка видео, если оно больше не в зоне видимости
        video.pause();
      }
    }
  };

  function playAndPauseVideo(container: HTMLDivElement) {
    const playPauseBtn = container.querySelector('[data-playback]') as HTMLButtonElement;
    const video = container.querySelector('video') as HTMLVideoElement; // Получаем элемент видео, для которого было срабатывание

    playPauseBtn.addEventListener('click', () => {
      const icon = playPauseBtn.querySelector('use') as SVGUseElement;
      const href = icon.getAttribute('href')?.split('#') || '';

      if (video.paused) {
        // Если видео не воспроизводится
        video.play().catch(error => console.error('Ошибка при воспроизведении видео:', error));
        playPauseBtn.setAttribute('data-playback', 'play');
        icon.setAttribute('href', `${href[0]}#pause`);
      } else {
        // Если видео воспроизводится
        video.pause();
        playPauseBtn.setAttribute('data-playback', 'pause');
        icon.setAttribute('href', `${href[0]}#play`);
      }
    });
  }
  function unmuteAndMuteVideo(container: HTMLDivElement) {
    const soundBtn = container.querySelector('[data-sound]') as HTMLButtonElement;
    const video = container.querySelector('video') as HTMLVideoElement; // Получаем элемент видео, для которого было срабатывание

    soundBtn.addEventListener('click', () => {
      const icon = soundBtn.querySelector('use') as SVGUseElement;
      const href = icon.getAttribute('href')?.split('#') || '';

      if (video.muted) {
        // Если видео не воспроизводится
        video.muted = false;
        video.volume = 0.5;
        soundBtn.setAttribute('data-sound', 'unmute');
        icon.setAttribute('href', `${href[0]}#unmute`);
      } else {
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
