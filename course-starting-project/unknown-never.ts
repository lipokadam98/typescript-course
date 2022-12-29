let userInput: unknown;
let userName: string;


userInput = 5;
userInput = 'May';

if(typeof userInput === 'string'){
    userName = userInput;
}


function generateError(message: string, code: number) : never{
    throw {message: message, errorCode: code};
}

try{

}catch(error){
    
}
const result = generateError('An error occured',500);
console.log(result);