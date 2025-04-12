// interface User{
//     name:string;
//     age:number;
// };
// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age;
// }

// const age= sumOfAge({
//     name:'Tara',
//     age:20,

// },
// {
//     name:'jira',
//     age:30,
// }

// )

// console.log(age)

interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};
// PICK: Selects only specific keys from a type.
// Here, we're picking only 'name', 'age', and 'email' from the User interface.
type UpdateProps =Pick<User,'name'|'age'|'email'>//PICK



// PARTIAL: Makes all properties of a type optional.
// Now 'name', 'age', and 'email' are optional — useful for update functions where not all fields are required.
type UpdatePropsOptional = Partial<UpdateProps> //PARTIAL
function updateuser(updateProbs:UpdatePropsOptional){
    // This function can now accept any combination of 'name', 'age', and 'email'.
    // Good for partial updates without requiring all fields.
}
updateuser({
    name:"123"
})
//readonly
//  Prevents reassignment to the properties of the type.
// Once created, 'name' and 'age' cannot be changed.
type user={
    readonly name:string,
    readonly age:string,
}
//same : 
// const user:Readonly<user>{
//     name:string,
//     age:string,
// }

//RECORD and Maps
type USER={
    id:string;
    username:string;
}
type USERS={
    [key:string]:user;
}
// type Users = Record<string,number>;//Record
type Users = Record<string,{age:number;name:string}>;
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

const users:Users={
    "ras@qd1":{age:21,name:"snk"}
}

// map
type user1={
    name:string;
    age:number;
    email:string;
}

const useers =new Map<string,user1>()
useers.set("ras@qd1",{name:"Ras",age:30,email:"ras@qdl"})
useers.set("sara@qdq",{name:"sara",age:32,email:"snk@123"})

const user = useers.get("ras@q1")
useers.delete("ras@qd1")
//exclude
type EventType="click"|"scroll"|"mousemove";
type ExcludeEvent=Exclude<EventType,'scroll'>;

const handleEvent=(event:ExcludeEvent)=>{
    console.log(`handle event ${event}`);

};

handleEvent('click');