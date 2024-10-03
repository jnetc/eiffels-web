export default function playAndPauseVideo() {
    // Find all video elements on the page
    const allVideoContainers = document.querySelectorAll('.video-container');
    // Settings for IntersectionObserver
    const options = {
        root: null, // Tracking occurs relative to the viewport
        rootMargin: '0px', // No additional margin for tracking
        threshold: 0.5, // Video will be considered visible when it is fully in the viewport
    };
    // Callback function that will be called when the video intersects with the visible area (viewport)
    const callback = (entries) => {
        // Iterate over all intersection entries
        for (const entry of entries) {
            const video = entry.target.querySelector('video'); // Get the video element for which the intersection occurred
            // If the video is fully visible
            if (entry.isIntersecting) {
                // Try to play the video
                video.play().catch(error => console.error('Error playing video:', error));
            }
            else {
                // Pause the video if it is no longer visible
                video.pause();
            }
        }
    };
    function playAndPauseVideo(container) {
        const playPauseBtn = container.querySelector('[data-playback]');
        const video = container.querySelector('video'); // Get the video element for which the intersection occurred
        playPauseBtn.addEventListener('click', () => {
            var _a;
            const icon = playPauseBtn.querySelector('use');
            const href = ((_a = icon.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('#')) || '';
            if (video.paused) {
                // If the video is not playing
                video.play().catch(error => console.error('Error playing video:', error));
                playPauseBtn.setAttribute('data-playback', 'play');
                icon.setAttribute('href', `${href[0]}#pause`);
            }
            else {
                // If the video is playing
                video.pause();
                playPauseBtn.setAttribute('data-playback', 'pause');
                icon.setAttribute('href', `${href[0]}#play`);
            }
        });
    }
    function unmuteAndMuteVideo(container) {
        const soundBtn = container.querySelector('[data-sound]');
        const video = container.querySelector('video'); // Get the video element for which the intersection occurred
        soundBtn.addEventListener('click', () => {
            var _a;
            const icon = soundBtn.querySelector('use');
            const href = ((_a = icon.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('#')) || '';
            if (video.muted) {
                // If the video is muted
                video.muted = false;
                video.volume = 0.5; // Set volume to 50%
                soundBtn.setAttribute('data-sound', 'unmute');
                icon.setAttribute('href', `${href[0]}#unmute`);
            }
            else {
                // If the video is not muted
                video.muted = true;
                soundBtn.setAttribute('data-sound', 'mute');
                icon.setAttribute('href', `${href[0]}#mute`);
            }
        });
    }
    // For each video element on the page, create a new observer
    for (const video of allVideoContainers) {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(video); // Observe the current video element
        playAndPauseVideo(video);
        unmuteAndMuteVideo(video);
    }
}
//# sourceMappingURL=sectionOverview.js.map