var http = require('http'); 
const exercise = require('../service/exercise')


function convertNumber(number){
   const verify = exercise.verifyNumbers(number); 
   console.log(verify)
   if(verify == true){
        const convertNumber = exercise.convertNumber(number);
        return {status:200, response: "O número binário em decimal é: " + convertNumber.toString()}

   }else{ 
    const message ="O número digitado não é uma sequencia binária ou possui mais do que 8 dígitos"
    return {status: 500, response: message}
   }
}

module.exports = {
    convertNumber,
}