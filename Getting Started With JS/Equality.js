var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2;
// true

studentName1 === studentName2;
// true

workshopEnrollment1 == workshopEnrollment2;
// true

workshopEnrollment1 === workshopEnrollment2;
// true

// NULL -- UNDEFINED
var wokrshop1 = {topic: null};
var wokrshop2 = {};

if (
    (wokrshop1.topic == null || wokrshop1.topic == undefined) &&
    (wokrshop2 == null || wokrshop1.topic == undefined) 
) {
    // ...
}

if (
    wokrshop1.topic == null &&
    wokrshop2 == null
) {
    // ...
}