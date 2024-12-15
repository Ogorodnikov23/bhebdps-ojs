describe("About Reflection (about_reflection.js)", function() {
    function A() {
        this.aprop = "A";
    }

    function B() {
        this.bprop = "B";
    }

    // Наследование: прототип B становится экземпляром A
    B.prototype = new A();
    B.prototype.constructor = B; // Исправляем свойство constructor

    it("hasOwnProperty", function() {
        let b = new B();

        let keys = [];
        for (let propertyName in b) {
            keys.push(propertyName);
        }

        // Количество свойств: 'bprop', 'aprop' и 'constructor'
        expect(3).toBe(keys.length);
        expect(["bprop", "aprop", "constructor"]).toEqual(keys);

        // Проверка собственных свойств объекта b
        let ownKeys = [];
        for (let propertyName in b) {
            if (b.hasOwnProperty(propertyName)) {
                ownKeys.push(propertyName);
            }
        }

        // Только 'bprop' является собственным свойством
        expect(1).toBe(ownKeys.length);
        expect(["bprop"]).toEqual(ownKeys);
    });

    it("constructor property", function() {
        let a = new A();
        let b = new B();

        // Конструктор объекта a — это функция A
        expect("function").toBe(typeof(a.constructor));
        expect("A").toBe(a.constructor.name);

        // Конструктор объекта b теперь правильно указывает на функцию B
        expect("B").toBe(b.constructor.name);
    });
});