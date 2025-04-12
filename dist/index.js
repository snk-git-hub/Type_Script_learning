"use strict";
// interface User{
//     name:string;
//     age:number;
// };
// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age;
// }
;
function updateuser(updateProbs) {
    // This function can now accept any combination of 'name', 'age', and 'email'.
    // Good for partial updates without requiring all fields.
}
updateuser({
    name: "123"
});
// const users={
//     "ras@qd1":{
//         id:'ras@qd1',
//         username:'harkirat',
//     },
//     "ras@":{
//         id:'ras@',
//         username:'harkirat',
//     }
// }
const users = {
    "ras@qd1": { age: 21, name: "snk" }
};
// map
const useers = new Map();
useers.set("ras@qd1", { name: "Ras", age: 30, email: "ras@qdl" });
useers.set("sara@qdq", { name: "sara", age: 32, email: "snk@123" });
const user = useers.get("ras@q1");
useers.delete("ras@qd1");
