function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 100);
}

ask("What is closure?");
// What is closure?

// ===========================

function ask(question) {
    return function holdYourQuestion() {
        console.log(question);
    }
}

var myQuestion = ask("What is closure?");

// ...

myQuestion(); 
// What is closure?