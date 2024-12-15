describe("About Numbers (about_numbers.js)", function() {

    it("types", function() {
        let typeOfIntegers = typeof(6);
        let typeOfFloats = typeof(3.14159);
        // typeof(6) и typeof(3.14159) оба возвращают "number", поэтому typeOfIntegers === typeOfFloats равно true
        expect(true).toBe(typeOfIntegers === typeOfFloats);
        // В JavaScript для всех чисел используется тип данных "number"
        expect("number").toBe(typeOfIntegers);
        // Целое число 1 эквивалентно 1.0 в JavaScript, так как язык не различает целые и дробные числа
        expect(1).toBe(1.0);
    });

    it("NaN", function() {
        let resultOfFailedOperations = 7 / 'apple';
        // Функция isNaN(resultOfFailedOperations) возвращает true, поскольку результат операции — NaN.
        expect(true).toBe(isNaN(resultOfFailedOperations));
        // В JavaScript NaN не равен самому себе, поэтому resultOfFailedOperations == NaN возвращает false
        expect(false).toBe(resultOfFailedOperations == NaN);
    });

});