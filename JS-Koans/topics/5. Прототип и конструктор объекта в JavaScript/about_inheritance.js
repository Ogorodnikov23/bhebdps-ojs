function Muppet(age, hobby) {
    this.age = age;
    this.hobby = hobby;

    this.answerNanny = function() {
        return "Everything's cool!";
    };
}

function SwedishChef(age, hobby, mood) {
    Muppet.call(this, age, hobby);
    this.mood = mood;

    this.cook = function() {
        return "Mmmm soup!";
    };
}

SwedishChef.prototype = new Muppet();

describe("About inheritance (about_inheritance.js)", function() {
    beforeEach(function() {
        this.muppet = new Muppet(2, "coding");
        this.swedishChef = new SwedishChef(2, "cooking", "chillin");
    });

    it("should be able to call a method on the derived object", function() {
        // Метод cook возвращает "Mmmm soup!"
        expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
    });

    it("should be able to call a method on the base object", function() {
        // Метод answerNanny из базового класса возвращает "Everything's cool!"
        expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
    });

    it("should set constructor parameters on the base object", function() {
        // Конструктор SwedishChef устанавливает age = 2 и hobby = "cooking"
        expect(this.swedishChef.age).toEqual(2);
        expect(this.swedishChef.hobby).toEqual("cooking");
    });

    it("should set constructor parameters on the derived object", function() {
        // Конструктор SwedishChef устанавливает mood = "chillin"
        expect(this.swedishChef.mood).toEqual("chillin");
    });
});

describe("About Crockford's inheritance improvement", function() {
    beforeEach(function() {
        this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");

        // Улучшение по Crockford для создания прототипного наследования
        Object.prototype.beget = function() {
            function F() {}
            F.prototype = this;
            return new F();
        };

        function Gonzo(age, hobby, trick) {
            Muppet.call(this, age, hobby);
            this.trick = trick;

            this.doTrick = function() {
                return this.trick;
            };
        }

        // Наследуем прототип Muppet без вызова конструктора
        Gonzo.prototype = Muppet.prototype.beget();
    });

    it("should be able to call a method on the derived object", function() {
        // Метод doTrick возвращает "eat a tire"
        expect(this.gonzo.doTrick()).toEqual("eat a tire");
    });

    it("should be able to call a method on the base object", function() {
        // Метод answerNanny из базового класса возвращает "Everything's cool!"
        expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
    });

    it("should set constructor parameters on the base object", function() {
        // Конструктор Gonzo устанавливает age = 3 и hobby = "daredevil performer"
        expect(this.gonzo.age).toEqual(3);
        expect(this.gonzo.hobby).toEqual("daredevil performer");
    });

    it("should set constructor parameters on the derived object", function() {
        // Конструктор Gonzo устанавливает trick = "eat a tire"
        expect(this.gonzo.trick).toEqual("eat a tire");
    });
});