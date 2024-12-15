describe("About Strings (about_strings.js)", function() {

    it("delimiters", function() {
        let singleQuotedString = 'apple';
        let doubleQuotedString = "apple";
        // равны ли две строки?
        expect(true).toBe(singleQuotedString === doubleQuotedString);
    });

    it("concatenation", function() {
        let fruit = "apple";
        let dish = "pie";
        // объединение строк
        expect("apple pie").toBe(fruit + " " + dish);
    });

    it("character Type", function() {
        let characterType = typeof("Amory".charAt(1)); // typeof будет объяснён в разделе о рефлексии
        // в JavaScript нет типа данных для символов
        expect("string").toBe(characterType);
    });

    it("escape character", function() {
        let stringWithAnEscapedCharacter = "\u0041pple";
        // Unicode-символ \u0041 соответствует букве "A". Поэтому строка "\u0041pple" равна "Apple"
        expect("Apple").toBe(stringWithAnEscapedCharacter);
    });

    it("string.length", function() {
        let fruit = "apple";
        // Строка "apple" содержит 5 символов, поэтому fruit.length равен 5
        expect(5).toBe(fruit.length);
    });

    it("slice", function() {
        let fruit = "apple pie";
        // Метод slice(0,5) возвращает подстроку с индексами от 0 до 4, то есть "apple"
        expect("apple").toBe(fruit.slice(0, 5));
    });
});