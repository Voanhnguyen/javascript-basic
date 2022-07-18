console.log('Hello world from HTML')

// let arr = [1,2,3,4,5,6,7,8,9,10]
let arr = [
    {name: 'Eric', age: 25},
    {name: 'Monica', age: 25},
    {name: 'Ross', age: 27},
    {name: 'ABC', age: 28},
    {name: 'Hoi Dan IT', age: 29},
]
//Filter, find
let result = arr.filter((item, index) =>{
    return item && item.age === 25;
});

console.log(result)