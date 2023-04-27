
const array =[ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
document.getElementById("arr").innerHTML = array;
 array.sort(function(a,b){
     return a-b
 });
 document.getElementById("arr1").innerHTML = array;