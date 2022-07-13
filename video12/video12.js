console.log('Hello world from HTML')
let arrTop4 = ['Man City', 'Liver', 'Mu', 'Chelsea'];

// Vòng lặp white (Không thoả mãn điều kiện sẽ không chạy lần nào)
let i = 0;
while(i < arrTop4.length){
    console.log('Top: ', i+1, arrTop4[i])
    i++;
}

// vòng lặp do white (chạy ít nhất 1 lần nếu điều kiện không thoả mãn)
let j = 0;
do{
    console.log('Top: ', j+1, arrTop4[j])
    j++;
}while(j<arrTop4.length)

let k = 0;
let flag = false;

while(!flag){
    console.log('check value i: ', k)
    k++;
    if(k === 10){
        flag = true;
    }
}