// Code goes here!
console.log('asdas');

const userName = 'Max';

/*let age = 30;

age = 29;*/

/*function add(n1: number, n2:number){
    let result;
    result = n1 + n2;
    return result;
}*/

/*const add = (a: number, b: number = 12) => {
    return a+b;
}

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event)); 
}
console.log(add(2));*/

const hobbies = ['sports','cooking'];

let activeHobbies = ['hiking',...hobbies];

console.log(activeHobbies);

const person = {
    firstName : 'Max',
    age: 30
}


const copiedPerson = {...person};
person.age = 1;
console.log(person);

console.log(copiedPerson);


const add = (...numbers: number[]) =>{
   return numbers.reduce((curResult,curValue)=>{
    return curResult + curValue;
   },0 );
};

const addedNumbers = add(1,2,3,4,5,6,7);

console.log("The added numbers are: ",addedNumbers);

const [hobby1,hobby2]  = hobbies;

console.log(hobby1);

const { firstName: username, age: age} = person

console.log(username);