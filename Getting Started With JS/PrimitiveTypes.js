typeof doesntExist;
// undefined

var v = null;
typeof v;
// "object"

v = function(){};
typeof v;
// function

v = [1,2,3];
typeof v;
// object