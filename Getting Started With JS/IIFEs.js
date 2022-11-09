// IMMEDIATELY INVOKED FUNCTION EXPRESSION
var teacher = "Kyle";

(function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher);
})();

console.log(teacher)