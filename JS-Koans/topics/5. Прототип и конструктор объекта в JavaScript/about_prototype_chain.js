describe("About Prototype Chain (about_prototype_chain.js)", function() {
    let father = {
        b: 3,
        c: 4
    };

    let child = Object.create(father);
    child.a = 1;
    child.b = 2;

    /*
     * ---------------------- ---- ---- ----
     *                      [a]  [b]  [c]
     * ---------------------- ---- ---- ----
     * [child]               1    2
     * ---------------------- ---- ---- ----
     * [father]                   3    4
     * ---------------------- ---- ---- ----
     * [Object.prototype]
     * ---------------------- ---- ---- ----
     * [null]
     * ---------------------- ---- ---- ----
     */

    it("Is there an 'a' and 'b' own property on child?", function() {
        // child.hasOwnProperty('a') возвращает true, так как 'a' является собственным свойством
        expect(true).toBe(child.hasOwnProperty('a'));
        // child.hasOwnProperty('b') возвращает true, так как 'b' является собственным свойством
        expect(true).toBe(child.hasOwnProperty('b'));
    });

    it("Is there an 'a' and 'b' property on child?", function() {
        // Значение 'a' равно 1 (собственное свойство)
        expect(1).toBe(child.a);
        // Значение 'b' равно 2 (собственное свойство)
        expect(2).toBe(child.b);
    });

    it("If 'b' was removed, what's b value?", function() {
        delete child.b;
        // После удаления собственного свойства 'b' у child, значение 'b' берётся из прототипа (father), где 'b' равно 3
        expect(3).toBe(child.b);
    });

    it("Is there a 'c' own property on child?", function() {
        // child.hasOwnProperty('c') возвращает false, так как 'c' находится в прототипе (father), а не в child
        expect(false).toBe(child.hasOwnProperty('c'));
    });

    it("Is there a 'c' property on child?", function() {
        // Значение 'c' берётся из прототипа (father), где 'c' равно 4
        expect(4).toBe(child.c);
    });

    it("Is there a 'd' property on child?", function() {
        // Свойство 'd' отсутствует как у child, так и у его прототипа (father), поэтому результат undefined
        expect(undefined).toBe(child.d);
    });
});