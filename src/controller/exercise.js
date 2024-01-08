var http = require('http'); 
const exercise = require('../service/exercise')


function convertNumber(number){
   const verify = exercise.verifyNumbers(number); 
   console.log(verify)
   if(verify == true){
        const convertNumber = exercise.convertNumber(number);
        
        return {status:200, response: "O número binário em decimal é: " + convertNumber.toString()}

   }else{ 
    const message ="Não é uma sequencia numérica binária"
    return {status: 500, response: message}
   }
}

module.exports = {
    convertNumber,
}