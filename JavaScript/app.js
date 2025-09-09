
//Condicionales (IF, ELSE IF, ELSE) 

let password = "hola123";

let input = 'asadadsasdasdasd'

let result = input == password;

if(result == true){
    console.log("Login Correcto");
}else{
    console.log("Login Incorrecto");
}


//Condicionales (SWITCH CASE)


let typeCard = 'Debit Card';

switch(typeCard){
    case 'Debit Card':
        console.log("This is debit card");
        break;
    case 'Credit Card':
        console.log("This is credit card");
        break;
    default:
        console.log("No card detected");
        break;
}



