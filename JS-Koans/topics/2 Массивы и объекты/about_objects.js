describe("About Objects (about_objects.js)", function() {

    it("object type", function() {
        let emptyObject = {};
        // The type of an object in JavaScript is "object"
        expect("object").toBe(typeof(emptyObject));
    });

    it("object literal notation", function() {
        let person = {
            name: "Amory Blaine",
            age: 102
        };
        // The name and age properties have been defined.
        expect("Amory Blaine").toBe(person.name);
        expect(102).toBe(person.age);
    });

    it("dynamically adding properties", function() {
        let person = {};
        person.name = "Amory Blaine";
        person.age = 102;
        // The properties are dynamically added to the person object.
        expect("Amory Blaine").toBe(person.name);
        expect(102).toBe(person.age);
    });

    it("adding properties from strings", function() {
        let person = {};
        person["name"] = "Amory Blaine";
        person["age"] = 102;
        // Properties are added using string keys.
        expect("Amory Blaine").toBe(person.name);
        expect(102).toBe(person.age);
    });

    it("adding functions", function() {
        let person = {
            name: "Amory Blaine",
            age: 102,
            toString: function() {
                return `I ${this.name} am ${this.age} years old.`; // Using 'this' to refer to the person object.
            }
        };
        // The toString function returns a string describing the person.
        expect("I Amory Blaine am 102 years old.").toBe(person.toString());
    });

    it("property enumeration", function() {
        let keys = [];
        let values = [];
        let person = { name: 'Amory Blaine', age: 102, unemployed: true };
        for (let propertyName in person) {
            keys.push(propertyName);
            values.push(person[propertyName]);
        }
        // The property names are 'name', 'age', and 'unemployed'.
        expect(keys).toEqual(["name", "age", "unemployed"]);
        // The property values are 'Amory Blaine', 102, and true.
        expect(values).toEqual(["Amory Blaine", 102, true]);
    });

});