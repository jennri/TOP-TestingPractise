function capitalise (str){
    if (str == '' || str == null) return "nada"
    return str[0].toUpperCase() + str.slice(1)
}


module.exports = capitalise;

