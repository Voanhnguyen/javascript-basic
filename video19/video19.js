console.log('Hello world form HTML')

let sum = (a,b) => {
    return a + b;
}

console.log(' check sum: 9 + 6 = ', sum(6,9))

let obj = {
    name: 'Eric',
    address: 'Ha Noi',
    // method => Nằm bên trong class hoặc object.
    getName: function(){
        return this.name;
    }
}

console.log(' >>> get name obj: ', obj.getName())

//Function vs method => tái sử dụng code ( viết 1 lần sử dụng nhiều nơi)
