//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for( let i=0; i<Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        let vals = Object.values(person3)[i];
            for( let i=0; i<Object.values(vals).length; i++){
                console.log(Object.values(vals)[i])
            }
    }else{
        console.log(Object.values(person3)[i])
    }
}
 

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    printInfo =() =>{
        return `Name: ${this.name}\nAge: ${this.age}`
    }
    newAge = () =>{ this.age++
        return (this.age)
        }
    }


let p1 = new Person('Kutah',26)
let p2 = new Person('Najeo', 18)
console.log(p1.printInfo())
console.log(p2.printInfo())
console.log(p1.newAge())
console.log(p1.newAge())
console.log(p1.newAge())
console.log(p1.printInfo())
console.log(p2.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLong =(strng) =>{
    return new Promise( (resolve, reject) =>{
        if(strng.length>10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}
isLong('my name is Kutah')
.then( (result) =>{
    console.log("Big word")
})
//did not resolve
.catch( (error) =>{
    console.log("Small Number")
})
isLong('my name is Kutah')

///https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
    if(array.length>0){
      const sum = (a, b) => a + b;
      answer=array.reduce(sum)
      if (answer % 2==0){
        return 'even'
      }else{
        return 'odd'
      }
      }
    return 'even'
    
  }

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
  function firstNonConsecutive (arr) {
    console.log(arr)
    for(let i=0;i<arr.length-1; i++){
      if( arr[i+1]!= arr[i]+1){
        return arr[i+1]
      }
    }
    return null;
  }