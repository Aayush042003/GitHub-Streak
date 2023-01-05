// Arrays

//Creating empty arrays

//Using Array Constuctor
    {
        // syntax
        const arr = Array()
        // or
        // let arr = new Array()
        console.log(arr) // []
    }
    
    //Using Square brackets
    {
        // syntax
        // This the most recommended way to create an empty list
        const arr = []
        console.log(arr)
    }
    
    //Array with values
    {
        const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
        const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
        const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
        const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
        const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
        const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
        
        // Print the array and its length
        
        console.log('Numbers:', numbers)
        console.log('Number of numbers:', numbers.length)
        
        console.log('Fruits:', fruits)
        console.log('Number of fruits:', fruits.length)
        
        console.log('Vegetables:', vegetables)
        console.log('Number of vegetables:', vegetables.length)
        
        console.log('Animal products:', animalProducts)
        console.log('Number of animal products:', animalProducts.length)
        
        console.log('Web technologies:', webTechs)
        console.log('Number of web technologies:', webTechs.length)
        
        console.log('Countries:', countries)
        console.log('Number of countries:', countries.length)
    }
    //Array can have items of different types
    {
        const arr = [
            'Asabeneh',
            250,
            true,
            { country: 'Finland', city: 'Helsinki' },
            { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
        ] // arr containing different data types
        console.log(arr)
    }
    
    //Creating array using split
    {
        let js = 'JavaScript'
        const charsInJavaScript = js.split('')
        
        console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
        
        let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
        const companies = companiesString.split(',')
        console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
        
        let txt =
          'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
        const words = txt.split(' ')
        console.log(words)
        // the text has special characters think how you can just get only the words
        // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
    }
    
    //Accessing arrays using index
    {
        const fruits = ['banana', 'orange', 'mango', 'lemon']
        let firstFruit = fruits[0] // we are accessing the first item using its index
        
        console.log(firstFruit) // banana
        
        secondFruit = fruits[1]
        console.log(secondFruit) // orange
        
        let lastFruit = fruits[3]
        console.log(lastFruit) // lemon
        // Last index can be calculated as follows
        
        let lastIndex = fruits.length - 1
        lastFruit = fruits[lastIndex]
        
        console.log(lastFruit)  // lemon
    }
    {
        const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers
    
        console.log(numbers.length)  // => to know the size of the array, which is 6
        console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
        console.log(numbers[0])      //  -> 0
        console.log(numbers[5])      //  -> 100
        
        let lastIndex = numbers.length - 1;
        console.log(numbers[lastIndex]) // -> 100
    }
    {
        const webTechs = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB'
          ] // List of web technologies
          
          console.log(webTechs)        // all the array items
          console.log(webTechs.length) // => to know the size of the array, which is 7
          console.log(webTechs[0])     //  -> HTML
          console.log(webTechs[6])     //  -> MongoDB
          
          let lastIndex = webTechs.length - 1
          console.log(webTechs[lastIndex]) // -> MongoDB
    }
    
    //Modifying Array elements
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers[0] = 10      // changing 1 at index 0 to 10
        numbers[1] = 20      // changing  2 at index 1 to 20
        
        console.log(numbers) // [10, 20, 3, 4, 5]
        
        const countries = [
          'Albania',
          'Bolivia',
          'Canada',
          'Denmark',
          'Ethiopia',
          'Finland',
          'Germany',
          'Hungary',
          'Ireland',
          'Japan',
          'Kenya'
        ]
        
        countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
        let lastIndex = countries.length - 1
        countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
        
        console.log(countries)
    }
    
    // Manipulating Array
    
    //using array constructor
    {
        const arr = Array() // creates an an empty array
        console.log(arr)
        
        const eightEmptyValues = Array(8) // it creates eight empty values
        console.log(eightEmptyValues) // [empty x 8]
    }
    
    // Creating static values with fill
    {
        const arr = Array() // creates an an empty array
        console.log(arr)
        
        const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
        console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
        
        const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
        console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
        
        const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
        console.log(four4values) // [4, 4, 4, 4]
    }
    
    // Concatenating array using concat
    {
        const firstList = [1, 2, 3]
        const secondList = [4, 5, 6]
        const thirdList = firstList.concat(secondList)
        
        console.log(thirdList) // [1, 2, 3, 4, 5, 6]
    }
    {
        const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
        const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
        const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays
        
        console.log(fruitsAndVegetables)
    }
    
    // Getting array length
    {
        const numbers = [1, 2, 3, 4, 5]
        console.log(numbers.length) // -> 5 is the size of the array
    }
    
    //Getting index of element in array
    {
        const numbers = [1, 2, 3, 4, 5]
    
        console.log(numbers.indexOf(5)) // -> 4
        console.log(numbers.indexOf(0)) // -> -1
        console.log(numbers.indexOf(1)) // -> 0
        console.log(numbers.indexOf(6)) // -> -1
    }
    {
        // let us check if a banana exist in the array
        
        const fruits = ['banana', 'orange', 'mango', 'lemon']
        let index = fruits.indexOf('banana')  // 0
        
        if(index === -1){
        console.log('This fruit does not exist in the array')  
        } else {
            console.log('This fruit does exist in the array')
        }
        // This fruit does exist in the array
        
        // we can use also ternary here
        index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')
        
        // let us check if an avocado exist in the array
        let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
        if(indexOfAvocado === -1){
        console.log('This fruit does not exist in the array')  
        } else {
            console.log('This fruit does exist in the array')
        }
        // This fruit does not exist in the array
    }
    
    //Getting last index of element in array
    {
        const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
    
        console.log(numbers.lastIndexOf(2)) // 7
        console.log(numbers.lastIndexOf(0)) // -1
        console.log(numbers.lastIndexOf(1)) //  6
        console.log(numbers.lastIndexOf(4)) //  3
        console.log(numbers.lastIndexOf(6)) // -1
    }
    
    // using includes
    {
        const numbers = [1, 2, 3, 4, 5]
    
        console.log(numbers.includes(5)) // true
        console.log(numbers.includes(0)) // false
        console.log(numbers.includes(1)) // true
        console.log(numbers.includes(6)) // false
        
        const webTechs = [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Redux',
          'Node',
          'MongoDB'
        ] // List of web technologies
        
        console.log(webTechs.includes('Node'))  // true
        console.log(webTechs.includes('C'))     // false
    }
    
    // Checking array
    {
        const numbers = [1, 2, 3, 4, 5]
        console.log(Array.isArray(numbers)) // true
        
        const number = 100
        console.log(Array.isArray(number)) // false
    }
    
    //Converting Array to String
    {
        const numbers = [1, 2, 3, 4, 5]
        console.log(numbers.toString()) // 1,2,3,4,5
        
        const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
        console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
    }
    
    //Joining array elements
    {
        const numbers = [1, 2, 3, 4, 5]
        console.log(numbers.join()) // 1,2,3,4,5
        
        const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
        
        console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
        console.log(names.join('')) //AsabenehMathiasEliasBrook
        console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
        console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
        console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
        
        const webTechs = [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Redux',
          'Node',
          'MongoDB'
        ] // List of web technologies
        
        console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
        console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
    }
    
    // Slicing array elements
    {
        const numbers = [1,2,3,4,5]
    
        console.log(numbers.slice()) // -> it copies all  item
        console.log(numbers.slice(0)) // -> it copies all  item
        console.log(numbers.slice(0, numbers.length)) // it copies all  item
        console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
    }
    
    //Splice method in array
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.splice()
        console.log(numbers)                // -> remove all items
    }
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.splice(0,1)
      console.log(numbers)            // remove the first item
    }
    {
        const numbers = [1, 2, 3, 4, 5, 6]
        numbers.splice(3, 3, 7, 8, 9)
      console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
    }
    
    //Adding item in array using push
    {
        const arr  = ['item1', 'item2','item3']
        arr.push('new item')
        console.log(arr)
        // ['item1', 'item2','item3','new item']
    }
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.push(6)
        console.log(numbers) // -> [1,2,3,4,5,6]
        
        numbers.pop() // -> remove one item from the end
        console.log(numbers) // -> [1,2,3,4,5]
    }
    {
        let fruits = ['banana', 'orange', 'mango', 'lemon']
        fruits.push('apple')
        console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']
        
        fruits.push('lime')
        console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
    }
    
    // Removing end element using pop
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.pop() // -> remove one item from the end
        console.log(numbers) // -> [1,2,3,4]
    }
    
    // Removing element from beginning
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.shift() // -> remove one item from the beginning
        console.log(numbers) // -> [2,3,4,5]
    }
    
    // Add an element to the beginning
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.unshift(0) // -> add one item from the beginning
        console.log(numbers) // -> [0,1,2,3,4,5]
    }
    
    //Reversing array order
    {
        const numbers = [1, 2, 3, 4, 5]
        numbers.reverse() // -> reverse array order
        console.log(numbers) // [5, 4, 3, 2, 1]
        
        numbers.reverse()
        console.log(numbers) // [1, 2, 3, 4, 5]
    }
    
    // Sorting elements in array
    {
        const webTechs = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB'
          ]
          
          webTechs.sort()
          console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
          
          webTechs.reverse() // after sorting we can reverse it
          console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
    }
    
    // Array of arrays
    {
        const firstNums = [1, 2, 3]
        const secondNums = [1, 4, 9]
        
        const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
        console.log(arrayOfArray[0]) // [1, 2, 3]
        
         const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
         const backEnd = ['Node','Express', 'MongoDB']
         const fullStack = [frontEnd, backEnd]
         console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
         console.log(fullStack.length)  // 2
         console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
         console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
    }
