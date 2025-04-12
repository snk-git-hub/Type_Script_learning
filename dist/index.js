"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({
    name: 'Tara',
    age: 20,
}, {
    name: 'jira',
    age: 30,
});
console.log(age);
