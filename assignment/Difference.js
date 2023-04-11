var num;
function diff(num){
    if(num<13){
        return 13-num;
    }else
     return 2*(num-13);
     
}
document.getElementById("q5").innerHTML=diff(4);
document.getElementById("q7").innerHTML=diff(21);
