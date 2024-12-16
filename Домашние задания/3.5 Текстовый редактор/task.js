// task.js

/**
 * Инициализация текстового редактора.
 * Сохраняет и восстанавливает текст из локального хранилища.
 */
const initializeTextEditor = () => {
    // Получил элемент textarea по ID
    const editor = document.getElementById('editor');

    /**
     * Функция для сохранения текста в локальное хранилище.
     */
    const saveText = () => {
        const text = editor.value;
        localStorage.setItem('savedText', text);
    };

    /**
     * Функция для восстановления текста из локального хранилища.
     */
    const loadText = () => {
        const savedText = localStorage.getItem('savedText');
        if (savedText !== null) {
            editor.value = savedText;
        }
    };

    // Восстанавил текст при инициализации
    loadText();

    // Добавил обработчик события 'input' для сохранения текста при каждом изменении
    editor.addEventListener('input', saveText);
};

// Запуск инициализации 
document.addEventListener('DOMContentLoaded', initializeTextEditor);