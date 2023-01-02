/* Non-Primitive DataTypes */
{
    let nums = [1, 2, 3]
    nums[0] = 10
    
    console.log(nums)  // [10, 2, 3]
    }
    {
    
    let nums = [1, 2, 3]
    let numbers = [1, 2, 3]
    
    console.log(nums == numbers)  // false
    
    let userOne = {
    name:'Aayush',
    role:'Student',
    country:'India'
    }
    
    let userTwo = {
    name:'Aayush',
    role:'Student',
    country:'India'
    }
    
    console.log(userOne == userTwo) // false
    }
    {
        let nums = [1, 2, 3]
        let numbers = nums
        
        console.log(nums == numbers)  // true
        
        let userOne = {
            name:'Aayush',
            role:'Student',
            country:'India'
            }
        
        let userTwo = userOne
        
        console.log(userOne == userTwo)  // true
    }
    
    /*Number DataType */
    {
        let age = 35
    const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
    let mass = 72         // mass in Kilogram
    const PI = 3.14       // pi a geometrical constant
    
    // More Examples
    const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
    const bodyTemp = 37      // oC average human body temperature, which is a constant
    
    console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
    }
    
    /* Math Object */
    {
    const PI = Math.PI
    
    console.log(PI)                            // 3.141592653589793
    
    // Rounding to the closest number
    // if above .5 up if less 0.5 down rounding
    
    console.log(Math.round(PI))                // 3 to round values to the nearest number
    
    console.log(Math.round(9.81))              // 10
    
    console.log(Math.floor(PI))                // 3 rounding down
    
    console.log(Math.ceil(PI))                 // 4 rounding up
    
    console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
    
    console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value
    
    const randNum = Math.random() // creates random number between 0 to 0.999999
    console.log(randNum)
    
    // Let us  create random number between 0 to 10
    
    const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
    console.log(num)
    
    //Absolute value
    console.log(Math.abs(-10))      // 10
    
    //Square root
    console.log(Math.sqrt(100))     // 10
    
    console.log(Math.sqrt(2))       // 1.4142135623730951
    
    // Power
    console.log(Math.pow(3, 2))     // 9
    
    console.log(Math.E)             // 2.718
    
    // Logarithm
    // Returns the natural logarithm with base E of x, Math.log(x)
    console.log(Math.log(2))        // 0.6931471805599453
    console.log(Math.log(10))       // 2.302585092994046
    
    // Returns the natural logarithm of 2 and 10 respectively
    console.log(Math.LN2)           // 0.6931471805599453
    console.log(Math.LN10)          // 2.302585092994046
    
    // Trigonometry
    Math.sin(0)
    Math.sin(60)
    
    Math.cos(0)
    Math.cos(60)
    }
    
    /*Random Number Generator */
    {
        let randomNum = Math.random()         // generates 0 to 0.999
        let numBtnZeroAndTen = randomNum * 11
        
        console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99
        
        let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
        console.log(randomNumRoundToFloor)    // this gives between 0 and 10 
    }
    
    /* Strings */
    {
    let space = ' '           // an empty space string
    let firstName = 'Aayush'
    let lastName = 'Gaur'
    let age = 19
    let country = 'India'
    let quote = "The saying,'Seeing is Believing' is not correct in 2020."
    let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
    
    /*String Concat */
    let fullName = firstName + space + lastName; // concatenation, merging two string together.
    console.log(fullName);
    let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
    
    console.log(personInfoOne)
    
    /*Long String */
    const paragraph = "Hello, My name is Aayush Gaur.\
    I am a student of VIT Bhopal."
    console.log(paragraph)
    
    console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
    console.log('Days\tTopics\tExercises')
    console.log('Day 1\t3\t5')
    console.log('Day 2\t3\t5')
    console.log('This is a backslash  symbol (\\)') // To write a backslash
    console.log('In every programming language it starts with \"Hello, World!\"')
    console.log("In every programming language it starts with \'Hello, World!\'")
    console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
    
    
    /* Template Literals */
    console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
    let a = 2
    let b = 3
    console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
    }
    
    /*String Methods */
    {
    let string = 'JavaScript'
    console.log(string.length)      // 10
    
    let firstLetter = string[0]
    console.log(firstLetter)           // J
    
    let secondLetter = string[1]       // a
    let thirdLetter = string[2]
    let lastLetter = string[9]
    
    console.log(lastLetter)            // t
    
    let lastIndex = string.length - 1
    console.log(lastIndex)  // 9
    console.log(string[lastIndex])    // t
    
    console.log(string.toUpperCase())     // JAVASCRIPT
    console.log(string.toLowerCase())     // javascript
    
    console.log(string.substr(4,6))    // Script
    
    console.log(string.substring(0,4))     // Java
    console.log(string.substring(4,10))    // Script
    }
    {
    let string = '20 Days Of JavaScript'
    
    console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
    console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
    
    let firstName = 'Aayush'
    
    console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
    console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]
    
    let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
    
    console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
    console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
    }
    {
        let string = '   20 Days Of JavaScript   '
    
        console.log(string)
        console.log(string.trim(' '))
        
        let firstName = ' Asabeneh '
        
        console.log(firstName)
        console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
    }
    {
        let string = '20 Days Of JavaScript'
    
    console.log(string.includes('Days'))     // true
    console.log(string.includes('days'))     // false - it is case sensitive!
    
    let country = 'Finland'
    
    console.log(country.includes('fin'))     // false
    console.log(country.includes('Fin'))     // true
    }
    {
        let string = '20 Days Of JavaScript'
        console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
        
        let country = 'Finland'
        console.log(country.replace('Fin', 'Noman'))       // Nomanland
        
        console.log(string.charAt(0))        // 3
    
        let lastIndex = string.length - 1
        console.log(string.charAt(lastIndex)) // t
    
        console.log(string.charCodeAt(3))        // D ASCII number is 68
    
        console.log(string.charCodeAt(lastIndex)) // t ASCII is 116
    }
    {
        let string = '20 Days Of JavaScript'
    
        console.log(string.indexOf('D'))          // 3
        console.log(string.indexOf('Days'))       // 3
        console.log(string.indexOf('days'))       // -1
        console.log(string.indexOf('a'))          // 4
        console.log(string.indexOf('JavaScript')) // 11
        console.log(string.indexOf('Script'))     //15
        console.log(string.indexOf('script'))     // -1
    }
    {
    let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
    
    console.log(string.lastIndexOf('love'))       // 67
    console.log(string.lastIndexOf('you'))        // 63
    console.log(string.lastIndexOf('JavaScript')) // 38
    }
    {
        let string = '20'
        console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
        
        let country = 'Fin'
        console.log(country.concat("land")) // Finland
    }
    {
    let string = 'Love is the best to in this world'
    
    console.log(string.startsWith('Love'))   // true
    console.log(string.startsWith('love'))   // false
    console.log(string.startsWith('world'))  // false
    }
    {
        let string = 'Love is the most powerful feeling in the world'
    
        console.log(string.endsWith('world'))         // true
        console.log(string.endsWith('love'))          // false
        console.log(string.endsWith('in the world')) // true
    }
    {
        let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
        console.log(string.search('love'))          // 2
        console.log(string.search(/javascript/gi))  // 7
    }
    {
        let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
        console.log(string.match('love'))
    
        let pattern = /love/gi
        console.log(string.match(pattern))   // ["love", "love", "love"]
    
        let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
        let regEx = /\d+/
        
        // d with escape character means d not a normal d instead acts a digit
        // + means one or more digit numbers,
        // if there is g after that it means global, search everywhere.
        
        console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
        console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
    }
    {
        let string = 'love'
        console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
    }
    /*Checking DataTypes */
    {
        let firstName = 'Aayush'      // string
        let age = 19                  // number
        let job                       // undefined, because a value was not assigned
    
        console.log(typeof 'Aayush')  // string
        console.log(typeof firstName)   // string
        console.log(typeof 10)          // number
        console.log(typeof 3.14)        // number
        console.log(typeof true)        // boolean
        console.log(typeof false)       // boolean
        console.log(typeof NaN)         // number
        console.log(typeof job)         // undefined
        console.log(typeof undefined)   // undefined
        console.log(typeof null)        // object
    }
    /*Chaning DataTypes */
    //String to Int
    {
        let num = '10'
        let numInt = parseInt(num)
        console.log(numInt) // 10
    }
    {
        let num = '10'
        let numInt = Number(num)
        
        console.log(numInt) // 10
    }
    
    {
        let num = '10'
        let numInt = +num
        
        console.log(numInt) // 10
    }
    
    //String to Float
    {
        let num = '9.81'
        let numFloat = parseFloat(num)
        
        console.log(numFloat) // 9.81
    }
    {
        let num = '9.81'
        let numFloat = Number(num)
        
        console.log(numFloat) // 9.81
    }
    {
        let num = '9.81'
        let numFloat = +num
        
        console.log(numFloat) // 9.81
    }
    
    //Float to Int
    {
        let num = 9.81
        let numInt = parseInt(num)
        
        console.log(numInt) // 9
    }
    
    /*Primitive DataTypes */
    {
        let numOne = 3
        let numTwo = 3
        
        console.log(numOne == numTwo)      // true
        
        let js = 'JavaScript'
        let py = 'Python'
        
        console.log(js == py)             //false 
        
        let lightOn = true
        let lightOff = false
        
        console.log(lightOn == lightOff) // false
    }