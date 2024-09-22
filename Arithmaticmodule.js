//Arithmatic Functions;

exports.add = function(x, y){
    return (x+y);
}

exports.sub = function(x,y)
{
    return(x-y);
}

exports.mul = function(a, b){
    return(a * b);
}

exports.div = function(a,b){
    if (b>0)
    {
        return(a/b);
    }
    else
    return 0;
}

exports.mod = function (p, q){
    return(p%q);
}
