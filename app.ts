// TS Compiler P
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards


// typeSCRipt def : Typescript mai hamesha type deni zarooi hai 



                                       // TYPE ANNOTATION STARTED




// let username: string = `Ali`
// // let username = 20; 
// console.log(username);

// let num:string = `20`

// console.log(num);

// let isloggedIn:boolean = true
// console.log(isloggedIn);



// TypeScript Array 


// let user : string[] = [`Ali`]

// console.log(user);

//  let user : string[] = [`Ali`]
//  console.log(user);


                                                  // ANY 

// any: yeh woh type hai jis ko app kahin bhi use krte ho mgr yeh bad practice hai hum use nhi krte isee

// let username: any = `Ali`
// username = 20
// console.log(username);


                                        // Function In TypeScript 


// function sum(num1:number , num2:number):number{
//     return num1 + num2

// }

// console.log(20 + 30);


// function age(user1:string , user2:string):string{
//     return user1 + user2

// }

// console.log(`Ali ` + `Abdullah`);


// function greetUser(user:string, age:number){
//     console.log(`hello ${user} with age ${age}`);
    

// }

// greetUser(`Ali` , 20)



                                             // Type INFERENCE


// DEF: Type inference mai app ko type define krne ki zaroort nhi hai woh khud hi default pr aajati hai 


// let username = `Ali`
// // username = 20

// let num = 20
// // num = `age`


// let fruits = [`banana` , 20]

// console.log(fruits);


                                             // Type Aliases


// type random = string

// let username:random = `Ali`


// type fruits = (string | number | boolean)[]

// let fruits:fruits = [`Ali` , 20 , true]


// type user = {

//     username : string;
//     age : number;
//     email : string;
//     isLoggedIn : boolean;
//     lastName? : string;

// }


// const user : user = {
//     username : `Ali`,
//     age : 20,
//     email : `abc@gmail.com`,
//     isLoggedIn : true,

// }

// user.lastName = `Zaman`



type user = {
    username : string;
    email : string;
    age : number;
    isLoggesIn : boolean;
    lastName? : string;
}

const user: user = {
    username : `Ali`,
    email : `abc@gmail.com`,
    age : 20,
    isLoggesIn : true,


}


user.lastName = `Zaman`



