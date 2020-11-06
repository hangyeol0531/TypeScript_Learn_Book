"use strict";
exports.__esModule = true;
exports.testMakePerson = void 0;
var Person_1 = require("./person/Person");
exports.testMakePerson = function () {
    var jane = Person_1.makePerson('Jane');
    var jack = Person_1.makePerson('jack');
    console.log(jane, jack);
};
exports.testMakePerson();
