fullName = 'Aman Singh'
console.log(fullName);
let year = 2023
console.log(year)
year = 2024
console.log(year)

const planet = 'Earth'
console.log(planet)
// planet = 'Mars'
console.log(planet)

let a;
console.log("a= "+ a)

// const b;  Error--> as variable declared with const keyword must be defined there only

{
    let a = 20;
    console.log(a);
}
console.log("a ouside the block: "+ a);
{
    let b = 69;
    console.log("b inside first block " + b);
    {
        let b = 6969;
        console.log("b inside nested block "+ b);
    }
}

let name = 'a'