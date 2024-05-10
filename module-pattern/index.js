var myNamespace = (function () {
    var myPrivateVar = 0;
    var myPrivateMethod = function (someText) {
        console.log(someText);
        console.log('myPrivateVar', myPrivateVar);
    };
    return {
        myPublicVar: "foo",
        myPublicFunction: function (bar) {

            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();
myNamespace.myPublicFunction('minh')
myNamespace.myPublicFunction('minh2')
myNamespace.myPublicFunction('minh3')
myNamespace.myPublicFunction('minh4')
/** *******************/
// var testModule = (function () {
//     var counter = 0;
//     return {
//         incrementCounter: function () {
//             return counter++;
//         },
//         resetCounter: function () {
//             console.log('counter value prior to reset:' + counter);
//             counter = 0;
//         }
//     };
// })();
// testModule.incrementCounter();
// testModule.resetCounter();