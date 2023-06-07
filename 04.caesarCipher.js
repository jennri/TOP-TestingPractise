 //doesn't account for capitals 

 function caesarCipher(str){
    newStr = ''
    arrShifted = [];

    for (let i=0; i<str.length; i++){
        //Filters out any charCodes before a
        //Filters out charCodes + shiftValue that goes past z
        if (str[i].charCodeAt()+1 > 96 &&
            str[i].charCodeAt()+1 < 123) {
        arrShifted.push(String.fromCharCode(str[i].charCodeAt()+1))
        //takes in charCodes + shiftValue that goes past z, wraps around back to a
        //Filters out charCodes past z that are not letters
        } else if (str[i].charCodeAt() < 123 &&
            str[i].charCodeAt()+1 > 122) {
        arrShifted.push(String.fromCharCode(str[i].charCodeAt()-25))
        //Just pushes numbers and punctuation normally to string
        } else {
        arrShifted.push(str[i])
        }
    }
    newStr = arrShifted.join("")
    return newStr
 }

module.exports = caesarCipher;
