// Functions

//Function Declaration
// Function without a parameter and return
{
    function square() {
        let num = 2
        let sq = num * num
        console.log(sq)
      }
      
      square() // 4
      
      // function without parameter
      function addTwoNumbers() {
        let numOne = 10
        let numTwo = 20
        let sum = numOne + numTwo
      
        console.log(sum)
      }
      
      addTwoNumbers() // a function has to be called by its name to be executed
    }
    
    // Function returning value
    {
        function addTwoNumbers() {
            let numOne = 2
            let numTwo = 3
            let total = numOne + numTwo
            return total
      
        }
      
      console.log(addTwoNumbers())
    }
    
    // Function with a parameter
    {
        function areaOfCircle(r) {
            let area = Math.PI * r * r
            return area
          }
          
          console.log(areaOfCircle(10)) // should be called with one argument
          
          function square(number) {
            return number * number
          }
          
          console.log(square(10))
    }
    
    // Function with 2 argument
    {
        function sumTwoNumbers(numOne, numTwo) {
            let sum = numOne + numTwo
            return sum
          }
          
          console.log(sumTwoNumbers(10, 20))
    }
    
    //Function with many parameters
    {
        function sumArrayValues(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
              sum = sum + arr[i];
            }
            return sum;
          }
          const numbers = [1, 2, 3, 4, 5];
              //calling a function
          console.log(sumArrayValues(numbers));
    }
    
    //Function with unlimited parameters
    
    // Unlimited parameters in regular function
    {
        function sumAllNums() {
            console.log(arguments)
           }
           
           sumAllNums(1, 2, 3, 4)
           // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    }
    {
        function sumAllNums() {
            let sum = 0
            for (let i = 0; i < arguments.length; i++) {
              sum += arguments[i]
            }
            return sum
          }
          
          console.log(sumAllNums(1, 2, 3, 4)) // 10
          console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
          console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
    }
    
    // Unlimited parameters in arrow function
    {
        const sumAllNums = (...args) => {
            let sum = 0
            for (const element of args) {
              sum += element
            }
            return sum
          }
          
          console.log(sumAllNums(1, 2, 3, 4)) // 10
          console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
          console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
    }
    
    // Anonymous Function
    {
        const anonymousFun = function() {
            console.log(
              'I am an anonymous function and my value is stored in anonymousFun'
            )
          }
    }
    
    // Expression Function
    {
        const square = function(n) {
            return n * n
          }
          
          console.log(square(2)) // -> 4
    }
    
    // Self Invoking Function
    {
        (function(n) {
            console.log(n * n)
          })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
          
          let squaredNum = (function(n) {
            return n * n
          })(10)
          
          console.log(squaredNum)
    }
    
    
    // Arrow Function
    {
        const square = n => {
            return n * n
          }
          
          console.log(square(2))  // -> 4
    }
    {
          // if we have only one line in the code block, it can be written as follows, explicit return
          const square = n => n * n  // -> 4
    }
    
    // Function with default parameters
    {
        function greetings(name = 'Aayush') {
            let message = `${name}, welcome to 20 Days Of JavaScript!`
            return message
          }
          
          console.log(greetings())
          console.log(greetings('Aaryan'))
    }
    
    // Arrow function with default parameters
    {
        const greetings = (name = 'Aayush') => {
            let message = name + ', welcome to 20 Days Of JavaScript!'
            return message
          }
          
          console.log(greetings())
          console.log(greetings('Aaryan'))
    }
    {
        const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
      
        console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
        console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
    }
    