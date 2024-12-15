describe("About Equality (about_equality.js)", function() {

    it("numeric equality", function() {
        expect(3 + 4).toBe(7); // Проверяем, что 3 + 4 равно 7
    });

    it("string equality", function() {

        expect("3" + "7").toBe("37"); // Проверяем, что "3" + "7" равно "37"
    });

    it("equality without type coercion", function() {

        expect(3 === 3).toBeTruthy(); // Проверяем, что 3 строго равно 3
    });

    it("equality with type coercion", function() {
        // какая строка равна 3 с приведением типов?
        expect(3 == "3").toBeTruthy(); // Проверяем, что 3 нестрого равно "3"
    });

    it("string literals", function() {

        expect("frankenstein" === "frankenstein").toBeTruthy(); // Проверяем, что "frankenstein" строго равно "frankenstein"

        expect("frankenstein" === 'frankenstein').toBeTruthy(); // Проверяем, что "frankenstein" строго равно 'frankenstein'
    });

});