function verifyNumbers(number){

    if(number.length<=8 && /^[01]+$/.test(number)){
      return true
    }else{
        return false
    }
};

function convertNumber(number){
    const arrayNumber = number.split('');
    var decNumber = 0 
    for (let index = arrayNumber.length-1 ; index >= 0; index--) {
     var result = arrayNumber[index]*(Math.pow(2,(index)));
     var decNumber = decNumber + result 
    }
    return decNumber
};


module.exports = {
    verifyNumbers,
    convertNumber,
}