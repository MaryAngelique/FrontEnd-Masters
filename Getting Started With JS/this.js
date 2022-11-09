var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(hos.teacher,question);
    },
};

workshop.ask("What is implicit binding?");
// Kyle what is implicit binding


// ==================================
function ask(question) {
    console.log(this.teacher,question);
}