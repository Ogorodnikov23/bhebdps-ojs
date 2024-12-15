describe("About Control Structures (about_control_structures.js)", function() {
    it("if", function() {
        let isPositive = false;
        if (2 > 0) {
            isPositive = true;
        }

        // переменная isPositive установлена в true, так как условие 2 > 0 истинно. 
        expect(true).toBe(isPositive);
    });


    it("for", function() {
        let counter = 10;
        for (let i = 1; i <= 3; i++) {
            counter = counter + i;
        }

        //Переменная counter начинается с 10. В цикле for добавляются числа 1, 2 и 3, итого 10 + 1 + 2 + 3 = 16 
        expect(16).toBe(counter);
    });


    it("for in", function() {
        // этот синтаксис будет объяснён в разделе об объектах
        let person = {
            name: "Amory Blaine",
            age: 102
        };
        let result = "";
        // for in перечисляет имена свойств объекта
        for (let property_name in person) {
            result = result + property_name;
        }

        // Цикл for in перебирает свойства объекта person и объединяет их имена в строку result, получая "nameage"
        expect("nameage").toBe(result);
    });


    it("ternary operator", function() {
        let fruit = true ? "apple" : "orange";
        expect("apple").toBe(fruit, 'каково значение fruit?');

        fruit = false ? "apple" : "orange";
        expect("orange").toBe(fruit, 'а теперь каково значение fruit?');
    });


    it("switch", function() {
        let result = 0;
        switch (2) {
            case 1:
                result = 1;
                break;
            case 1 + 1:
                result = 2;
                break;
        }

        // Значение 2 соответствует case 1+1, поэтому result устанавливается в 2
        expect(2).toBe(result);
    });



    it("switch default case", function() {
        let result = "Pippin";
        switch ("m") {
            case "f":
                result = "Frodo";
                break;
            case "s":
                result = "Samwise";
                break;
            default:
                result = "Merry";
                break;
        }

        // Значение "m" не соответствует ни одному из case, поэтому выполняется default, и result устанавливается в "Merry"
        expect("Merry").toBe(result);
    });


    it("null coalescing", function() {
        let result = null || "a value";

        // каково значение result?
        expect("a value").toBe(result);
    });
});