exports.Palindrome = function(String){
    let b = String.length -1;
    for (let a=0; a<String.length/2; a++){
        if (String[a]!= String[b]){
            return false;
        }
        b--;
    }
    return true;
}