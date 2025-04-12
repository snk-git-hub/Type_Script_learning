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

////////////////PICK///////////////////////
interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

type UpdateProps =Pick<User,'name'|'age'|'email'>//PICK
type UpdatePropsOptional = Partial<UpdateProps> //PARTIAL




function updateuser(updateProbs:UpdatePropsOptional){
}
updateuser({
    name:"123"
})