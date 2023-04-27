const input =[3, 6, 7, 12, 23, 4, 1, 16, 2];
const output =[];
input.forEach(oddeven);
function oddeven(value) {
    if(value % 2 == 0) {
        output.push(1);
    }
    
    // if the number is odd
    else {
        output.push(0);
    }
};
document.write(output);

