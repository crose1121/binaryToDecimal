//https://www.rapidtables.com/convert/number/binary-to-decimal.html


function binary2decimal(str){
    let result = 0;
    let exp = str.length-1;
    for (let i=0;i<str.length;i++) {
        if (str[i]==="1") {
            result += 2**exp
        }
        exp--;
    }


    return result;

}


console.log(binary2decimal("1100110101")) //28
                     //   4 3 2 1 0





//1   1    0   1    0    0    1    0    0