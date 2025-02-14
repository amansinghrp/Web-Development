let n = prompt("Enter array size");
let arr =[];
for(let i =1; i<=n; i++)
{
    arr.push(i);
}

let sum = arr.reduce((prev, curr) => {
    return prev+curr;
})

let mul = arr.reduce((prev, curr)=>{
    return prev*curr;
})

console.log(arr);
console.log(sum);
console.log(mul);