
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person :{
    name: string,
    age: number,
    hobbies: string[],
    role: Role
}= {
    name: "Adam Lipok",
    age: 24,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
}


//person.role.push('admin');
//person.role = [1, 'test', 1];
person.role = 2;
let favoritActivites: string[];


favoritActivites = [...person.hobbies];

person.hobbies.forEach((hobby: string)=>{
    console.log(hobby);
})
console.log(favoritActivites);
