document.addEventListener('DOMContentLoaded', () => {
    let isGameStarted = false;
    let gameInterval;

    function createFallingObject() {
        const gameContainer = document.querySelector("#game-container");
        const object = document.createElement('div');
        object.classList.add("falling-object");

        const left = Math.random() * (gameContainer.clientWidth - 20);
        const top = -20;

        object.style.left = left + 'px';
        object.style.top = top + 'px';
        gameContainer.appendChild(object);

        const animationDuration = 2000;
        object.style.transition = `top ${animationDuration}ms linear`;

        setTimeout(() => {
            object.style.top = gameContainer.clientHeight + 'px';

            object.addEventListener('transitionend', () => {
                gameContainer.removeChild(object);
            });
        }, 0);
    }

    const startButton = document.querySelector("#start-button");
    const stopButton = document.querySelector("#stop-button");

    startButton.addEventListener('click', () => {
        if (!isGameStarted) {
            isGameStarted = true;
            gameInterval = setInterval(createFallingObject, 4000);
            startButton.disabled = true;
            stopButton.disabled = false;
        }
    });

    stopButton.addEventListener('click', () => {
        if (isGameStarted) {
            isGameStarted = false;
            clearInterval(gameInterval);
            startButton.disabled = false;
            stopButton.disabled = true;
        }
    });
});
