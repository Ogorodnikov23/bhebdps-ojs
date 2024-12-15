describe("About Asserts (about_asserts.js)", function() {
    // Мы будем размышлять о правде, тестируя реальность через ожидания спецификаций.
    it('should expect true', function() {
        // Ваше путешествие начинается здесь: Замените слово false на true 
        expect(true).toBe(true);
    });

    // Чтобы понять реальность, мы должны сравнить наши ожидания с реальностью.
    it('should expect equality', function() {
        let expectedValue = 2;
        let actualValue = 1 + 1;

        expect(actualValue === expectedValue).toBeTruthy();
    });

    // Некоторые способы утверждения равенства лучше других.
    it('should assert equality a better way', function() {
        let expectedValue = 2;
        let actualValue = 1 + 1;

        // toEqual() сравнивает используя здравый смысл равенства.
        expect(actualValue).toEqual(expectedValue);
    });

    // Иногда нужно быть точным в том, что вы "типизируете".
    it('should assert equality with ===', function() {
        let expectedValue = "2";
        let actualValue = (1 + 1).toString();

        // toBe() всегда использует === для сравнения.
        expect(actualValue).toBe(expectedValue);
    });

    // Иногда мы будем просить вас заполнить значения.
    it('should have filled in values', function() {
        expect(1 + 1).toEqual(2);
    });
});