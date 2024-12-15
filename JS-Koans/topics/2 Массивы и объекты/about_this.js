describe("About this (about_this.js)", function() {

    it("'this' inside a method", function() {
        let person = {
            name: 'bob',
            intro: function() {
                return "Hello, my name is " + this.name; // Accessing the 'name' property of the current object
            }
        }

        // If an object has a method, you can access properties inside it using 'this'.
        expect(person.intro()).toBe("Hello, my name is bob");
    });

    it("'this' on unattached function", function() {
        let person = {
            globalName: 'bob',
            intro: function() {
                return "Hello, my name is " + this.globalName;
            }
        }

        let alias = person.intro;

        // If the function is not called as an object property, 'this' refers to the global context (window).
        window.globalName = 'Peter'; // Setting a global variable

        // In this case, 'this' refers to the global context, so 'globalName' is taken from the global scope.
        expect(alias()).toBe("Hello, my name is Peter");
    });

    it("'this' set explicitly", function() {
        let person = {
            name: 'bob',
            intro: function() {
                return "Hello, my name is " + this.name;
            }
        }

        // Calling a function with 'call' lets us assign 'this' explicitly.
        let message = person.intro.call({ name: "Frank" }); // Setting 'this' to a new object with 'name' as 'Frank'

        // 'this' now refers to the object passed to 'call', so 'name' is "Frank".
        expect(message).toBe("Hello, my name is Frank");
    });

});