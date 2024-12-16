// task.js

/**
 * Управление слайдером изображений.
 */
const Slider = (() => {
    /**
     * Конструктор слайдера.
     * @param {string} containerSelector - CSS селектор контейнера слайдера.
     */
    const Slider = function(containerSelector) {
        /**
         * Элементы слайдера.
         * @type {HTMLElement}
         */
        this.container = document.querySelector(containerSelector);
        this.slides = Array.from(this.container.querySelectorAll('.slider__item'));
        this.prevButton = this.container.querySelector('.slider__arrow_prev');
        this.nextButton = this.container.querySelector('.slider__arrow_next');
        this.currentSlideIndex = this.slides.findIndex((slide) =>
            slide.classList.contains('slider__item_active')
        );

        if (this.currentSlideIndex === -1) {
            this.currentSlideIndex = 0;
            this.slides[0].classList.add('slider__item_active');
        }

        this.registerEvents();
    };

    /**
     * Метод для переключения на предыдущий слайд.
     */
    Slider.prototype.showPrevSlide = function() {
        this.slides[this.currentSlideIndex].classList.remove('slider__item_active');
        this.currentSlideIndex =
            (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        this.slides[this.currentSlideIndex].classList.add('slider__item_active');
    };

    /**
     * Метод для переключения на следующий слайд.
     */
    Slider.prototype.showNextSlide = function() {
        this.slides[this.currentSlideIndex].classList.remove('slider__item_active');
        this.currentSlideIndex =
            (this.currentSlideIndex + 1) % this.slides.length;
        this.slides[this.currentSlideIndex].classList.add('slider__item_active');
    };

    /**
     * Регистрация обработчиков событий для навигации.
     */
    Slider.prototype.registerEvents = function() {
        this.prevButton.addEventListener('click', () => {
            this.showPrevSlide();
        });

        this.nextButton.addEventListener('click', () => {
            this.showNextSlide();
        });
    };

    return Slider;
})();

/**
 * Инициализация слайдера после загрузки.
 */
const initializeSliders = () => {
    const sliders = Array.from(document.querySelectorAll('.slider')).map(
        (sliderElement) => new Slider('.slider')
    );

};

// Запуск инициализации слайдера после загрузки DOM
document.addEventListener('DOMContentLoaded', initializeSliders);