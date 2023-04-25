let age : number = 23
let firstName : string = 'Damian'
let isTall : boolean = true
let childrensNames: string[] = ['lily', 'david']

console.log(`${firstName} is ${age} years old`)

if (isTall) {
    console.log(`and so tall`)
} else {
    console.log(`and so pretty`)
}

for (let i: number = 0; i < childrensNames.length; i ++) {
    console.log(childrensNames[i])
}

enum taxForm { 
    standardTaxForm = "1040",
    childTaxForm = "641",
    cryptoTaxForm = "420Z"
}

// console.log("the crypto one is " + taxForm.cryptoTaxForm)
// console.log("the  one is " + taxForm.standardTaxForm)
// console.log("the one is " + taxForm.childTaxForm)

let zipCode: string | number = "ABC"
zipCode = 12345

console.log(zipCode)