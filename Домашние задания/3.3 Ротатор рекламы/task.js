// task.js

// Функция для инициализации ротатора
const initializeRotators = () => {
    // Получаем все элементы с классом 'rotator' на странице
    const rotators = Array.from(document.querySelectorAll('.rotator'));

    // Проходимся по каждому ротатору и инициализируем его
    rotators.forEach((rotator) => {
        // Получаем все случаи (объявления) внутри текущего ротатора
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

        // Функция для переключения активного объявления
        const rotate = (currentIndex) => {
            // Текущий активный случай
            const currentCase = cases[currentIndex];

            // Удаляем класс активности у текущего случая
            currentCase.classList.remove('rotator__case_active');

            // Скрываем текущий случай
            currentCase.style.display = 'none';

            // Вычисляем индекс следующего случая (с циклическим переходом)
            const nextIndex = (currentIndex + 1) % cases.length;

            // Следующий случай
            const nextCase = cases[nextIndex];

            // Добавляем класс активности к следующему случаю
            nextCase.classList.add('rotator__case_active');

            // Отображаем следующий случай
            nextCase.style.display = 'inline';

            // Изменяем цвет текста согласно data-color
            const color = nextCase.getAttribute('data-color');
            nextCase.style.color = color;

            // Получаем скорость смены для следующего случая
            const speed = parseInt(nextCase.getAttribute('data-speed'), 10) || 1000; // По умолчанию 1000 мс

            // Устанавливаем таймер для следующей смены
            setTimeout(() => rotate(nextIndex), speed);
        };

        // Инициализируем первый случай
        cases.forEach((caseItem, index) => {
            if (caseItem.classList.contains('rotator__case_active')) {
                // Устанавливаем цвет для первого активного случая
                const color = caseItem.getAttribute('data-color');
                caseItem.style.color = color;

                // Скрываем все остальные случаи
                cases.forEach((item, idx) => {
                    if (idx !== index) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'inline';
                    }
                });

                // Запускаем цикл смены объявлений
                const speed = parseInt(caseItem.getAttribute('data-speed'), 10) || 1000; // По умолчанию 1000 мс
                setTimeout(() => rotate(index), speed);
            }
        });
    });
};

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initializeRotators);