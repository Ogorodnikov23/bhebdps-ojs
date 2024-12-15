describe("About Objects (about_objects.js)", function() {

    describe("Properties", function() {
        let megalomaniac;

        beforeEach(function() {
            megalomaniac = { mastermind: "Joker", henchwoman: "Harley" };
        });

        it("should confirm objects are collections of properties", function() {
            // Свойство mastermind равно "Joker"
            expect(megalomaniac.mastermind).toBe("Joker");
        });

        it("should confirm that properties are case sensitive", function() {
            // Свойство henchwoman равно "Harley"
            expect(megalomaniac.henchwoman).toBe("Harley");
            // Свойство henchWoman не определено (case-sensitive)
            expect(megalomaniac.henchWoman).toBe(undefined);
        });
    });

    it("should know properties that are functions act like methods", function() {
        let megalomaniac = {
            mastermind: "Brain",
            henchman: "Pinky",
            battleCry: function(noOfBrains) {
                return "They are " + this.henchman + " and the" +
                    Array(noOfBrains + 1).join(" " + this.mastermind);
            }
        };

        let battleCry = megalomaniac.battleCry(4);
        // battleCry: "They are Pinky and the Brain Brain Brain Brain"
        expect(battleCry).toMatch("They are Pinky and the Brain Brain Brain Brain");
    });

    it("should confirm that when a function is attached to an object, 'this' refers to the object", function() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let megalomaniac = {
            mastermind: "James Wood",
            henchman: "Adam West",
            birthYear: 1970,
            calculateAge: function() {
                return currentYear - this.birthYear;
            }
        };

        // Текущий год
        expect(currentYear).toBe(currentDate.getFullYear());
        // Возраст: текущий год - 1970
        expect(megalomaniac.calculateAge()).toBe(currentYear - 1970);
    });

    describe("'in' keyword", function() {
        let megalomaniac;
        beforeEach(function() {
            megalomaniac = {
                mastermind: "The Monarch",
                henchwoman: "Dr Girlfriend",
                theBomb: true
            };
        });

        it("should have the bomb", function() {
            let hasBomb = "theBomb" in megalomaniac;
            // Свойство theBomb есть в объекте
            expect(hasBomb).toBe(true);
        });

        it("should not have the detonator however", function() {
            let hasDetonator = "theDetonator" in megalomaniac;
            // Свойства theDetonator нет в объекте
            expect(hasDetonator).toBe(false);
        });
    });

    it("should know that properties can be added and deleted", function() {
        let megalomaniac = { mastermind: "Agent Smith", henchman: "Agent Smith" };

        // Свойства secretary ещё нет в объекте
        expect("secretary" in megalomaniac).toBe(false);

        megalomaniac.secretary = "Agent Smith";
        // Теперь свойство secretary есть в объекте
        expect("secretary" in megalomaniac).toBe(true);

        delete megalomaniac.henchman;
        // Свойство henchman удалено из объекта
        expect("henchman" in megalomaniac).toBe(false);
    });

    it("should use prototype to add to all objects", function() {
        function Circle(radius) {
            this.radius = radius;
        }

        let simpleCircle = new Circle(10);
        let colouredCircle = new Circle(5);
        colouredCircle.colour = "red";

        // У simpleCircle нет свойства colour
        expect(simpleCircle.colour).toBe(undefined);
        // colouredCircle имеет свойство colour со значением "red"
        expect(colouredCircle.colour).toBe("red");

        Circle.prototype.describe = function() {
            return "This circle has a radius of: " + this.radius;
        };

        // Метод describe добавлен через прототип
        expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
        expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
    });
});