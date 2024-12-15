describe("About Scope (about_scope.js)", function() {
    thisIsAGlobalVariable = 77;

    it("global variables", function() {
        // thisIsAGlobalVariable доступна в глобальной области видимости и равна 77
        expect(77).toBe(thisIsAGlobalVariable);
    });

    it("variables declared inside of a function", function() {
        let outerVariable = "outer";

        // Это самовызывающаяся функция. Она вызывает себя сразу после объявления.
        (function() {
            let innerVariable = "inner";
            // outerVariable доступна в этой области видимости, так как она объявлена во внешнем контексте
            expect("outer").toBe(outerVariable);
            // innerVariable определена в этой области видимости и равна "inner"
            expect("inner").toBe(innerVariable);
        })();

        // outerVariable по-прежнему доступна в этой области видимости
        expect("outer").toBe(outerVariable);
        // innerVariable не доступна за пределами функции, её тип "undefined"
        expect("undefined").toBe(typeof(innerVariable));
    });
});