// Destructuring and spreading

// Destructuring Arrays
{
    const numbers = [1, 2, 3]
    let [numOne, numTwo, numThree] = numbers
  
    console.log(numOne, numTwo, numThree)
}
{
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
      const [frontEnd, backEnd] = fullStack
      
      console.log(frontEnd)
      console.log(backEnd)
}
{
    const numbers = [1, 2, 3]
    let [numOne, , numThree] = numbers //2 is omitted
  
    console.log(numOne, numThree)
}
// We can use default value in case the value of array for that index is undefined:
{
    const names = [undefined, 'Brook', 'David']
    let [
      firstPerson = 'Aayush',
      secondPerson,
      thirdPerson,
      fourthPerson = 'John'
    ] = names
    
    console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
}
{
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [num1, num2, num3, ...rest] = nums
    
    console.log(num1, num2, num3)
    console.log(rest)
}

// Destructuring during iteration
{
    const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

    for (const [country, city] of countries) {
    console.log(country, city)
    }
}

// Destructuring Object
{
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
      }
      let { width, height, area, perimeter } = rectangle
      
      console.log(width, height, area, perimeter)
}

// Renaming during structuring
{
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
      }
      let { width: w, height: h, area: a, perimeter: p } = rectangle
      
      console.log(w, h, a, p)
}

// Object parameter without destructuring
{
// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
}

//Object parameter with destructuring
{
    const rect = {
        width: 20,
        height: 10
      }
      const calculatePerimeter = ({ width, height }) => {
        return 2 * (width + height)
      }
      
      console.log(calculatePerimeter(rect)) // 60
}

// Destructuring object during iteration
{
    const todoList = [
        {
          task:'Prepare JS Test',
          time:'4/1/2023 8:30',
          completed:true
        },
        {
          task:'Give JS Test',
          time:'4/1/2023 10:00',
          completed:false
        },
        {
          task:'Assess Test Result',
          time:'4/1/2023 1:00',
          completed:false
        }
        ]
        
        for (const {task, time, completed} of todoList){
          console.log(task, time, completed)
        }
}

// Spread or Rest Operator

//Spread operator to get rest of array elements
{
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [num1, num2, num3, ...rest] = nums

    console.log(num1, num2, num3)
    console.log(rest)
}

// Spread operator to copy array
{
    const evens = [0, 2, 4, 6, 8, 10]
    const evenNumbers = [...evens]
    
    const odds = [1, 3, 5, 7, 9]
    const oddNumbers = [...odds]
    
    const wholeNumbers = [...evens, ...odds]
    
    console.log(evenNumbers)
    console.log(oddNumbers)
    console.log(wholeNumbers)
}

// Spread operator to copy object
{
    const user = {
        name:'Aayush',
        title:'Programmer',
        country:'India',
        city:'Jaipur'
      }
      
      const copiedUser = {...user}
      console.log(copiedUser)
}
// Modifying or changing object while copying
{
    const user = {
        name:'Aayush',
        title:'Programmer',
        country:'India',
        city:'Jaipur'
      }
      
      const copiedUser = {...user, title:'instructor'}
      console.log(copiedUser)
}

// Spread operator with arrow function
{
    const PrintAllNums = (...args) => {
        console.log(args)
      }
      
      PrintAllNums(1, 2, 3, 4, 5)
}
{
    const sumAllNums = (...args) => {
        let sum = 0
        for (const num of args){
          sum += num
        }
        return sum
        
      }
      
      console.log(sumAllNums(1, 2, 3, 4, 5))
}