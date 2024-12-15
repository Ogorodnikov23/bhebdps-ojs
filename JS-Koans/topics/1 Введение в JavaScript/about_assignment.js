describe("About Assignment (about_assignment.js)", function() {
    it("local variables", function() {
        let temp = 1; // Здесь мы объявляем локальную переменную temp и присваиваем ей значение 1.

        expect(temp).toBe(1);
    });

    it("global variables", function() {
        temp = 1; // присваиваем значение 1 переменной temp без использования let, что делает её глобальной.
        expect(window.temp).toBe(temp);
    });
});