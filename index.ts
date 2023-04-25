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

function sum(x : number , y: number) : number {
    return x + y
}

console.log(sum(4,5))

let total: number = sum(5,6)
console.log(total)

function debug(message : string) : void { //Here DONT USE RETURN SEE VOID
    console.log(message)
}

debug("this is the message")

let person: any = { //to scape from errors
    firstName: "me",
    age: 23
}


//below is the right way to write an object, more similar to clases and constructors 
interface person {
    firstName: string,
    age: number,
    children: string[],
    hasCertificate: boolean,
    optional?: boolean //not obligatory
}

let damian: person = {
    firstName: "me",
    age: 23,
    children: ['Lily', 'David'],
    hasCertificate: false
}
