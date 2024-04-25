// 1. Dot syntax
var newObject = {};
newObject.someKey = 'Hello World';
console.log('1', newObject);
// 2. Square bracket syntax
var newObject2 = Object.create(null);
newObject2['someKey'] = 'Hello World 2';
// 3. Object.defineProperty
var newObject3 = new Object();
Object.defineProperty(newObject3, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: false,
    configurable: false
});
// console.log('2', newObject2);
// console.log('3', newObject3);
// newObject3.someKey = 'l'
// console.log('3', newObject3);

// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function (obj, key, value) {
    var config = {}
    config.value = value;
    Object.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);

defineProp(man, 'car', 'Delorean');
defineProp(man, 'dob', '1981');
defineProp(man, 'beard', false);
console.log('man', man);
// 4. Object.defineProperties
Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World Minh",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
});
console.log('defineProperties', newObject);

var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
driver.topSpeed // 100mph
