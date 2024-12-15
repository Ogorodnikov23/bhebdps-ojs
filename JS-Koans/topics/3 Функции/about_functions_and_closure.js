describe("О функциях и замыканиях (about_functions_and_closure.js)", function() {
    it("определение функций напрямую", function() {
        let result = "a";

        function changeResult() {
            // Способность функции обращаться к переменным из той же области видимости называется 'замыканием'
            result = "b";
        };
        changeResult();
        // Значение переменной result после вызова changeResult() равно "b"
        expect("b").toBe(result);
    });

    it("присваивание функций переменным", function() {
        let triple = function(input) {
            return input * 3;
        };
        // triple(4) возвращает 4 * 3 = 12
        expect(12).toBe(triple(4));
    });

    it("самовызывающиеся функции", function() {
        let publicValue = "shared";

        // Самовызывающиеся функции используются для создания локальной области видимости и передачи переменных
        (function(pv) {
            let secretValue = "password";
            // pv передаётся как аргумент и равно "shared"
            expect("shared").toBe(pv);
            // secretValue определена внутри функции, её тип "string"
            expect("string").toBe(typeof(secretValue));
            // publicValue доступна внутри функции, её тип "string"
            expect("string").toBe(typeof(publicValue));
        })(publicValue);

        // secretValue недоступна за пределами функции, её тип "undefined"
        expect("undefined").toBe(typeof(secretValue));
        // publicValue по-прежнему доступна, её тип "string"
        expect("string").toBe(typeof(publicValue));
    });

    it("массив arguments", function() {
        let add = function() {
            let total = 0;
            for (let i = 0; i < arguments.length; i++) {
                total += arguments[i];
            }
            return total;
        };

        // add(1, 2, 3, 4, 5) возвращает 15
        expect(15).toBe(add(1, 2, 3, 4, 5));
        // add(4, 7, -2) возвращает 9
        expect(9).toBe(add(4, 7, -2));
    });

    it("использование call для вызова функции", function() {
        let invokee = function(message) {
            return this + message;
        };

        // invokee.call("I am this!", "Where did it come from?") возвращает "I am this!Where did it come from?"
        let result = invokee.call("I am this!", "Where did it come from?");
        expect("I am this!Where did it come from?").toBe(result);
    });

    it("использование apply для вызова функции", function() {
        let invokee = function(message1, message2) {
            return this + message1 + message2;
        };

        // invokee.apply("I am this!", ["I am arg1", "I am arg2"]) возвращает "I am this!I am arg1I am arg2"
        let result = invokee.apply("I am this!", ["I am arg1", "I am arg2"]);
        expect("I am this!I am arg1I am arg2").toBe(result);
    });
});