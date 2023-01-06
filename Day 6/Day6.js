//Boolean Values
{
    let isLightOn = true
    let isRaining = false
    let isHungry = false
    let isMarried = true
    let truValue = 4 > 3    // true
    let falseValue = 4 < 3  // false
}
{
    let firstName
    console.log(firstName) //not defined, because it is not assigned to a value yet
}
{
    let empty = null
    console.log(empty) // -> null , means no value
}

// Arithmetic Operators
{
    let numOne = 4
    let numTwo = 3
    let sum = numOne + numTwo
    let diff = numOne - numTwo
    let mult = numOne * numTwo
    let div = numOne / numTwo
    let remainder = numOne % numTwo
    let powerOf = numOne ** numTwo
    
    console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64
}
{
    const PI = 3.14
    let radius = 100          // length in meter
    
    //Let us calculate area of a circle
    const areaOfCircle = PI * radius * radius
    console.log(areaOfCircle)  //  314 m
    
    
    const gravity = 9.81      // in m/s2
    let mass = 72             // in Kilogram
    
    // Let us calculate weight of an object
    const weight = mass * gravity
    console.log(weight)        // 706.32 N(Newton)
    
    const boilingPoint = 100  // temperature in oC, boiling point of water
    const bodyTemp = 37       // body temperature in oC
    
    
    // Concatenating string with numbers using string interpolation
    /*
     The boiling point of water is 100 oC.
     Human body temperature is 37 oC.
     The gravity of earth is 9.81 m/s2.
     */
    console.log(
      `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
    )
}

// Comparision Operators
{
    console.log(3 > 2)              // true, because 3 is greater than 2
    console.log(3 >= 2)             // true, because 3 is greater than 2
    console.log(3 < 2)              // false,  because 3 is greater than 2
    console.log(2 < 3)              // true, because 2 is less than 3
    console.log(2 <= 3)             // true, because 2 is less than 3
    console.log(3 == 2)             // false, because 3 is not equal to 2
    console.log(3 != 2)             // true, because 3 is not equal to 2
    console.log(3 == '3')           // true, compare only value
    console.log(3 === '3')          // false, compare both value and data type
    console.log(3 !== '3')          // true, compare both value and data type
    console.log(3 != 3)             // false, compare only value
    console.log(3 !== 3)            // false, compare both value and data type
    console.log(0 == false)         // true, equivalent
    console.log(0 === false)        // false, not exactly the same
    console.log(0 == '')            // true, equivalent
    console.log(0 == ' ')           // true, equivalent
    console.log(0 === '')           // false, not exactly the same
    console.log(1 == true)          // true, equivalent
    console.log(1 === true)         // false, not exactly the same
    console.log(undefined == null)  // true
    console.log(undefined === null) // false
    console.log(NaN == NaN)         // false, not equal
    console.log(NaN === NaN)        // false
    console.log(typeof NaN)         // number
    
    console.log('mango'.length == 'avocado'.length)  // false
    console.log('mango'.length != 'avocado'.length)  // true
    console.log('mango'.length < 'avocado'.length)   // true
    console.log('milk'.length == 'meat'.length)      // true
    console.log('milk'.length != 'meat'.length)      // false
    console.log('tomato'.length == 'potato'.length)  // true
    console.log('python'.length > 'dragon'.length)   // false
}

// Logical Operators
{
// && ampersand operator example
const check = 4 > 3 && 10 > 5         // true && true -> true
}
{
// || pipe or operator, example
const check = 4 > 3 || 10 > 5         // true  || true -> true
}
{
// ! Negation examples
let check = 4 > 3                     // true
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
}

// Increment Operator
{
    // Pre-Increment
    let count = 0
    console.log(++count)        // 1
    console.log(count)          // 1
}
{
    // Post-Increment
    let count = 0
    console.log(count++)        // 0
    console.log(count)          // 1
}

// Decrement Operator
{
    // Pre-Decrement
    let count = 0
    console.log(--count) // -1
    console.log(count)  // -1
}
{
    // Post-Decrement
    let count = 0
    console.log(count--) // 0
    console.log(count)   // -1
}

// Ternary Operators
{
    let isRaining = true
    isRaining
      ? console.log('You need a rain coat.')
      : console.log('No need for a rain coat.')
      // You need a rain coat.

    isRaining = false
    isRaining
      ? console.log('You need a rain coat.')
      : console.log('No need for a rain coat.')
      // No need for a rain coat.
}
{
    let number = 5
    number > 0
      ? console.log(`${number} is a positive number`)
      : console.log(`${number} is a negative number`)
      // 5 is a positive number

    number = -5
    number > 0
      ? console.log(`${number} is a positive number`)
      : console.log(`${number} is a negative number`)
      // -5 is a negetive number
}

//Operator Precedence
{
    console.log(3 + 4 * 5); // 3 + 20
    // expected output: 23
    
    console.log(4 * 3 ** 2); // 4 * 9
    // expected output: 36
    
    let a;
    let b;
    
    console.log(a = b = 5); // same as writing a = (b = 5);
    // expected output: 5
}
{
    console.log(3 + 10 * 2); // 23
    console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
    console.log((3 + 10) * 2); // 26, because the parentheses change the order
}
{
    const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
    const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
}

// Windows alert() method

{
    alert('Welcome to 30DaysOfJavaScript')
}

// Windows prompt() method
{
    let number = prompt('Enter number', 'number goes here')
    console.log(number)
}

// Windows confirm() method
{
    const agree = confirm('Are you sure you like to delete? ')
    console.log(agree) // result will be true or false based on what you click on the dialog box
}


// Time Object

//Creating Time Object
{
    const now = new Date()
    console.log(now) // 2023-01-03T16:44:15.507Z 
}
//Getting full year
{
    const now = new Date()
    console.log(now.getFullYear()) // 2023
}
//Getting month
{
    const now = new Date()
    console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
}
//Getting date
{
    const now = new Date()
    console.log(now.getDate()) // 3, because the day of the month is 1st,  day(1-31)
}
//Getting day
{
    const now = new Date()
    console.log(now.getDay()) // 2, because the day is Saturday which is the 7th day
    //  Sunday is 0, Monday is 1 and Saturday is 6
    // Getting the weekday as a number (0-6)
}
//Getting hours
{
    const now = new Date()
    console.log(now.getHours()) // 22, because the time is 22:20:18
}
//Getting minutes
{
    const now = new Date()
    console.log(now.getMinutes()) // 20, because the time is 22:20:18
}
//Getting seconds
{
    const now = new Date()
    console.log(now.getSeconds()) // 18, because the time is 22:20:18
}

// Getting Time

//using getTime()
{
    const now = new Date() //
    console.log(now.getTime()) // 1672764774325, this is the number of seconds passed from January 1, 1970 to January 3, 2023 22:20:18
}
//using Date.now()
{
    const allSeconds = Date.now() //
    console.log(allSeconds) // 1672764774325, this is the number of seconds passed from January 1, 1970 to January 3, 2023 22:20:18
    
    const timeInSeconds = new Date().getTime()
    console.log(allSeconds == timeInSeconds) // true
}
{
    const now = new Date()
    const year = now.getFullYear() // return year
    const month = now.getMonth() + 1 // return month(0 - 11)
    const date = now.getDate() // return date (1 - 31)
    const hours = now.getHours() // return number (0 - 23)
    const minutes = now.getMinutes() // return number (0 -59)
    
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 3/1/2023 22:20
}