describe("About Prototypal Inheritance (about_prototypal_inheritance.js)", function() {
    // Этот 'класс' определяет класс через его конструктор
    let Mammal = function(name) {
        this.name = name;
    };

    // Свойства и методы, которые не нужно задавать в конструкторе, добавляются к прототипу
    Mammal.prototype = {
        sayHi: function() {
            return "Hello, my name is " + this.name;
        }
    };

    it("defining a 'class'", function() {
        let eric = new Mammal("Eric");

        // Eric говорит: "Hello, my name is Eric"
        expect("Hello, my name is Eric").toBe(eric.sayHi());
    });

    // Добавляем ещё одну функцию к прототипу Mammal
    Mammal.prototype.favouriteSaying = function() {
        return this.name + "'s favourite saying is " + this.sayHi();
    };

    it("more functions", function() {
        let bobby = new Mammal("Bobby");

        // Bobby's favourite saying: "Bobby's favourite saying is Hello, my name is Bobby"
        expect("Bobby's favourite saying is Hello, my name is Bobby").toBe(bobby.favouriteSaying());
    });

    it("calling functions added to a prototype after an object was created", function() {
        let paul = new Mammal("Paul");

        // Добавляем новую функцию к прототипу Mammal
        Mammal.prototype.numberOfLettersInName = function() {
            return this.name.length;
        };

        // Длина имени "Paul" равна 4
        expect(4).toBe(paul.numberOfLettersInName());
    });

    // Вспомогательная функция для наследования
    function extend(child, supertype) {
        child.prototype = supertype.prototype;
    }

    // Подкласс Mammal
    function Bat(name, wingspan) {
        Mammal.call(this, name);
        this.wingspan = wingspan;
    }

    // Настройка наследования
    extend(Bat, Mammal);

    it("Inheritance", function() {
        let lenny = new Bat("Lenny", "1.5m");

        // Lenny говорит: "Hello, my name is Lenny"
        expect("Hello, my name is Lenny").toBe(lenny.sayHi());

        // Размах крыльев Lenny равен "1.5m"
        expect("1.5m").toBe(lenny.wingspan);
    });
});