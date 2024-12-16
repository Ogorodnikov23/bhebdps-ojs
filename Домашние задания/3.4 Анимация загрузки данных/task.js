// task.js

// Функция для инициализации загрузки курсов валют
const initializeCurrencyLoader = () => {
    // Получаем элемент анимации загрузки по ID
    const loader = document.getElementById('loader');

    // Получаем контейнер для отображения курсов валют
    const itemsContainer = document.getElementById('items');

    // URL для получения данных о курсах валют
    const apiUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

    // Функция для создания HTML-элемента курса валюты
    const createCurrencyItem = (currency) => {
        // Создание контейнера для курса
        const item = document.createElement('div');
        item.classList.add('item');

        // Создание элемента для кода валюты
        const code = document.createElement('div');
        code.classList.add('item__code');
        code.textContent = currency.CharCode;

        // Создание элемента для значения валюты
        const value = document.createElement('div');
        value.classList.add('item__value');
        value.textContent = currency.Value;

        // Создание элемента для обозначения валюты
        const currencySymbol = document.createElement('div');
        currencySymbol.classList.add('item__currency');
        currencySymbol.textContent = 'руб.';

        // Сбор всех элементов в контейнер курса
        item.appendChild(code);
        item.appendChild(value);
        item.appendChild(currencySymbol);

        return item;
    };

    // Функция для загрузки данных о курсах валют
    const loadCurrencyData = async() => {
        try {
            // Отображаем анимацию загрузки
            loader.classList.add('loader_active');

            // Выполнение GET-запрос к API
            const response = await fetch(apiUrl);

            // Проверка успешности запроса
            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }

            // Парсим ответ в формате JSON
            const data = await response.json();

            // Проверка наличие данных о валютах
            if (data && data.response && data.response.Valute) {
                const currencies = data.response.Valute;

                // Очищистка контейнера перед добавлением новых элементов
                itemsContainer.innerHTML = '';

                // Проход по каждому курсу валюты и добавка его в контейнер
                Object.values(currencies).forEach((currency) => {
                    const currencyItem = createCurrencyItem(currency);
                    itemsContainer.appendChild(currencyItem);
                });
            } else {
                throw new Error('Некорректный формат данных от API');
            }
        } catch (error) {
            // Вывод ошибку в консоль
            console.error('Ошибка при загрузке курсов валют:', error);

            // сообщение об ошибке пользователю
            itemsContainer.innerHTML = '<p>Не удалось загрузить курсы валют. Пожалуйста, попробуйте позже.</p>';
        } finally {
            // Скрытие анимацию загрузки
            loader.classList.remove('loader_active');
        }
    };

    // загрузка данных после полной загрузки DOM
    document.addEventListener('DOMContentLoaded', loadCurrencyData);
};

// Инициализация загрузчика курса валют
initializeCurrencyLoader();