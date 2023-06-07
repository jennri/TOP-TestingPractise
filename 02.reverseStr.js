function reverseStr(str){
    if (str == '' || str == null) return "nada"
    return str.split("").reverse().join("")
}

module.exports = reverseStr;