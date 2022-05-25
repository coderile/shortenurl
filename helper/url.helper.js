helers ={
    "isValidURL":function (string) {
        var res = string.split("://")
        if (res[0]=="http" || res[0]=="https"  ){
            return (res !== null);
        }
        return (res == null);
    }
}
module.exports = helers