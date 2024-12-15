(() => {
    let playing = true,
        activeHole = 1,
        score = 0, // Счетчик убитых кротов
        misses = 0; // Счетчик промахов

    // Функция для получения элемента лунки по индексу
    const getHole = index => document.getElementById(`hole${index}`);

    // Функция для деактивации текущей лунки
    const deactivateHole = index => {
        const hole = getHole(index);
        if (hole) {
            hole.classList.remove('hole_has-mole');
            console.log(`Крот исчез из лунки ${index}`);
        }
    };

    // Функция для активации новой лунки
    const activateHole = index => {
        const hole = getHole(index);
        if (hole) {
            hole.classList.add('hole_has-mole');
            console.log(`Крот появился в лунке ${index}`);
        }
    };

    // Функция для сброса счета и поражений
    const resetGame = () => {
        score = 0;
        misses = 0;
        updateScore();
        updateMisses();
    };

    // Функция для обновления отображения счета убитых кротов
    const updateScore = () => {
        const scoreElement = document.getElementById('dead');
        if (scoreElement) {
            scoreElement.textContent = score;
        }
    };

    // Функция для обновления отображения счетчика промахов
    const updateMisses = () => {
        const missesElement = document.getElementById('lost');
        if (missesElement) {
            missesElement.textContent = misses;
        }
    };

    // Функция для завершения игры
    const endGame = (message) => {
        playing = false;
        alert(message);
        resetGame();
    };

    // Функция для обработки кликов по лункам
    const handleClick = (event) => {
        if (!playing) return;

        const hole = event.currentTarget;
        console.log(`Кликнута лунка: ${hole.id}`);

        if (hole.classList.contains('hole_has-mole')) {
            score += 1;
            console.log(`Крот убит! Счет: ${score}`);
            updateScore();
            deactivateHole(activeHole);
            // Проверка на победу
            if (score >= 10) {
                endGame("Поздравляем! Вы победили, убив 10 кротов!");
            }
        } else {
            misses += 1;
            console.log(`Промах! Поражения: ${misses}`);
            updateMisses();
            // Проверка на поражение
            if (misses >= 5) {
                endGame("Игра окончена! Вы потерпели 5 поражений.");
            }
        }
    };

    // Функция для назначения обработчиков кликов на все лунки
    const assignClickHandlers = () => {
        for (let i = 1; i <= 9; i++) {
            const hole = getHole(i);
            if (hole) {
                hole.addEventListener('click', handleClick);
            }
        }
    };

    // Функция для запуска следующего раунда
    const next = () => setTimeout(() => {
        if (!playing) {
            return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
    }, 800);

    // Инициализация игры
    const init = () => {
        assignClickHandlers();
        next();
        resetGame();
    };

    // Запуск инициализации при загрузке страницы
    window.onload = init;
})();