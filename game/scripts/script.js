document.addEventListener('DOMContentLoaded', () => {
    let isGameStarted = false;
    let gameInterval;
    let score = 0; // Переменная для хранения счета

    // Укажите желаемый URL вашей картинки
    const imageUrl = 'https://w7.pngwing.com/pngs/416/463/png-transparent-red-wine-white-wine-bottle-glass-wine-bottle-wine-glass-wine-grape-thumbnail.png';

    function createFallingObject() {
        const gameContainer = document.querySelector("#game-container");
        const object = document.createElement('img');
        object.classList.add("falling-object");

        const left = Math.random() * (gameContainer.clientWidth - 20);
        const top = -20;

        object.src = imageUrl; // Здесь используется указанный URL

        object.style.left = left + 'px';
        object.style.top = top + 'px';
        gameContainer.appendChild(object);

        const animationDuration = 2000;
        object.style.transition = `top ${animationDuration}ms linear`;

        object.addEventListener('click', () => {
            // Обработчик клика на падающем объекте
            gameContainer.removeChild(object); // Удаляем объект
            score++; // Увеличиваем счет
            updateScore(); // Обновляем отображение счета
        });

        setTimeout(() => {
            object.style.top = gameContainer.clientHeight + 'px';

            object.addEventListener('transitionend', () => {
                gameContainer.removeChild(object);
            });
        }, 0);
    }

    function updateScore() {
        const scoreElement = document.querySelector("#score");
        scoreElement.textContent = `Счет: ${score}`;
    }

    const startButton = document.querySelector("#start-button");
    const stopButton = document.querySelector("#stop-button");

    startButton.addEventListener('click', () => {
        if (!isGameStarted) {
            isGameStarted = true;
            gameInterval = setInterval(createFallingObject, 2000);
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
            score = 0;
        }
    });
});
