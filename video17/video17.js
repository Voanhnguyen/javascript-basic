console.log('Hello world from HTML')

function getName (x,y,i) {
    console.log('1');
    console.log('2');
    console.log('3');
    if (i === 5 ) return; // return thoát ra khỏi function

    console.log('4');
    console.log('5');
    return  x + y ; // tính hiệu để function trả ra kết quả gì
}

console.log('check sum ', getName(9,6,5))