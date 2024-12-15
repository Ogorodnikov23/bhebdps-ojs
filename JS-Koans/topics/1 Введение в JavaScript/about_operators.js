describe("About Operators (about_operators.js)", function() {

    it("addition", function() {
        let result = 0;
        // начинаем с i = 0, добавляем i к result и увеличиваем i на 1 до тех пор, пока i не станет равным 5
        for (let i = 0; i <= 5; i++) {
            result = result + i;
        }
        // Каково значение result?
        expect(15).toBe(result);
    });

    it("assignment addition", function() {
        let result = 0;
        for (let i = 0; i <= 5; i++) {
            // код ниже эквивалентен result = result + i;, но более краткий
            result += i;
        }
        // Оператор += делает то же самое, что и result = result + i;. Сумма чисел от 0 до 5 равна 15.
        expect(15).toBe(result);
    });

    it("subtraction", function() {
        let result = 5;
        for (let i = 0; i <= 2; i++) {
            result = result - i;
        }
        // Начальное значение result = 5
        expect(2).toBe(result);
    });

    it("assignment subtraction", function() {
        let result = 5;
        for (let i = 0; i <= 2; i++) {
            result -= i;
        }
        // Оператор -= эквивалентен result = result - i;. Итоговое значение result = 2
        expect(2).toBe(result);
    });

    // Оператор присваивания доступен для умножения и деления, а также модульного деления
    // давайте сделаем ещё один, оператор остатка от деления, используемый для получения остатка от деления

    it("modulus", function() {
        let result = 10;
        let x = 5;
        // снова, это точно то же самое, что result = result % x
        result %= x;
        // Пояснение: Оператор %= выполняет операцию остатка от деления
        expect(0).toBe(result);
    });

    it("typeof", function() {
        // typeof({}) возвращает "object"
        expect("object").toBe(typeof({}));
        // typeof('apple') возвращает "string"
        expect("string").toBe(typeof('apple'));
        // typeof(-5) возвращает "number"
        expect("number").toBe(typeof(-5));
        // typeof(false) возвращает "boolean"
        expect("boolean").toBe(typeof(false));
    });
});