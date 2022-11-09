var students = [ /**/ ];

for (let i = 0; i < students.length; i++) {
    greetStudents(students[i]);
}

for (let student of students) {
    greetStudents(student);
}

function greetStudents(student) {
    console.log(`Hello, ${student.name}`);
}