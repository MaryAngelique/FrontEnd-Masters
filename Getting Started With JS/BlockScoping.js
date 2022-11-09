var teacher = "Kyle";

(function anotherTeacher() {
    let teacher = "Suzy";
    console.log(teacher);
})();

console.log(teacher);

// -------------------------------------

function formatStr(str) {
    {let preffix, rest;
        prefix = str.slic(0,3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if(/^FOO:/.test(str)) {
        return str;
    }

    return str.slice(4);
}