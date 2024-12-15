describe("About Functions (about_functions.js)", function() {

    it("should declare functions", function() {

        function add(a, b) {
            return a + b;
        }

        // add(1, 2) возвращает 3
        expect(add(1, 2)).toBe(3);
    });

    it("should know internal variables override outer variables", function() {
        let message = "Outer";

        function getMessage() {
            return message;
        }

        function overrideMessage() {
            let message = "Inner";
            return message;
        }

        // getMessage возвращает внешнюю переменную "Outer"
        expect(getMessage()).toBe("Outer");
        // overrideMessage возвращает внутреннюю переменную "Inner"
        expect(overrideMessage()).toBe("Inner");
        // Внешняя переменная message остаётся неизменной
        expect(message).toBe("Outer");
    });

    it("should have lexical scoping", function() {
        let variable = "top-level";

        function parentfunction() {
            let variable = "local";

            function childfunction() {
                return variable;
            }
            return childfunction();
        }

        // childfunction возвращает "local" из области видимости родительской функции
        expect(parentfunction()).toBe("local");
    });

    it("should use lexical scoping to synthesise functions", function() {

        function makeMysteryFunction(makerValue) {
            let newFunction = function doMysteriousThing(param) {
                return makerValue + param;
            };
            return newFunction;
        }

        let mysteryFunction3 = makeMysteryFunction(3); // Возвращает функцию, которая добавляет 3
        let mysteryFunction5 = makeMysteryFunction(5); // Возвращает функцию, которая добавляет 5

        // mysteryFunction3(10) возвращает 13, mysteryFunction5(5) возвращает 10. Сумма: 23
        expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
    });

    it("should allow extra function arguments", function() {

        function returnFirstArg(firstArg) {
            return firstArg;
        }

        // Возвращается первый аргумент "first"
        expect(returnFirstArg("first", "second", "third")).toBe("first");

        function returnSecondArg(firstArg, secondArg) {
            return secondArg;
        }

        // Второй аргумент не передан, поэтому возвращается undefined
        expect(returnSecondArg("only give first arg")).toBe(undefined);

        function returnAllArgs() {
            let argsArray = [];
            for (let i = 0; i < arguments.length; i += 1) {
                argsArray.push(arguments[i]);
            }
            return argsArray.join(",");
        }

        // Возвращает все аргументы, объединённые запятой
        expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
    });

    it("should pass functions as values", function() {

        let appendRules = function(name) {
            return name + " rules!";
        };

        let appendDoubleRules = function(name) {
            return name + " totally rules!";
        };

        let praiseSinger = { givePraise: appendRules };
        // praiseSinger.givePraise("John") возвращает "John rules!"
        expect(praiseSinger.givePraise("John")).toBe("John rules!");

        praiseSinger.givePraise = appendDoubleRules;
        // praiseSinger.givePraise("Mary") возвращает "Mary totally rules!"
        expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");
    });
});