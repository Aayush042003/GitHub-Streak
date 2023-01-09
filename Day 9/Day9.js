// Higher Order Function

// Callback
{
    // a callback function, the name of the function could be any name
    const callback = (n) => {
        return n ** 2
      }
      // function that takes other function as a callback
      function cube(callback, n) {
        return callback(n) * n
      }
      console.log(cube(callback, 3))
    }
    
    // Returning Function
    {
        const higherOrder = n => {
            const doSomething = m => {
              const doWhatEver = t => {
                return 2 * n + 3 * m + t
              }
              return doWhatEver
            }
            return doSomething
          }
          console.log(higherOrder(2)(3)(10))
    }
    
    // Setting time
    
    // setInterval
    {
        function sayHello() {
            console.log('Hello')
          }
          setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
    }
    
    // setTimeout
    {
        function sayHi() {
            console.log('Hi')
          }
          setTimeout(sayHi, 2000) // it prints hello after it waits for 2 seconds.
    }
    
    //Functional Programming
    
    // forEach
    {
        const numbers = [1, 2, 3, 4, 5];
        numbers.forEach(num => console.log(num))
    }
    {
        let sum = 0;
        const numbers = [1, 2, 3, 4, 5];
        numbers.forEach(num => sum += num)
        
        console.log(sum)
    }
    
    // map
    {
        const numbers = [1, 2, 3, 4, 5]
        const numbersSquare = numbers.map((num) => num * num)
        
        console.log(numbersSquare)
    }
    {
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
            'Kenya',
          ]
          const countriesToUpperCase = countries.map((country) => country.toUpperCase())
          console.log(countriesToUpperCase)
    
          // filter
          const countriesContainingLand = countries.filter((country) =>
          country.includes('land')
        )
        console.log(countriesContainingLand)
    
        const countriesHaveFiveLetters = countries.filter(
            (country) => country.length === 5
          )
          console.log(countriesHaveFiveLetters)
    }
    
    // reduce
    {
        const numbers = [1, 2, 3, 4, 5]
        const sum = numbers.reduce((acc, cur) => acc + cur, 0)
        
        console.log(sum)
    }
    
    // every
    {
        const names = ['Aaryan', 'Mathias', 'Elias', 'Brook']
        const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
        
        console.log(areAllStr)
    }
    {
        const bools = [true, true, true, true]
        const areAllTrue = bools.every((b) => b === true) // Are all true? 
        
        console.log(areAllTrue) // true
    }
    
    // find
    {
        const ages = [24, 22, 25, 32, 35, 18]
        const age = ages.find((age) => age < 20)
        
        console.log(age)
    }
    
    // findIndex
    {
        const names = ['AaryanMan', 'Mathias', 'Elias', 'Brook']
        const ages = [24, 22, 25, 32, 35, 18]
        
        const result = names.findIndex((name) => name.length > 7)
        console.log(result) // 0
        
        const age = ages.findIndex((age) => age < 20)
        console.log(age) // 5
    }
    
    // some
    {
        const bools = [true, true, true, true]
        
        const areSomeTrue = bools.some((b) =>  b === true)
        
        console.log(areSomeTrue) //true
    }
    
    // sort
    
    // sorting string values
    {
        const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
        console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
        //Now the original products array  is also sorted
    }
    
    // sorting numeric values
    {
        const numbers = [9.81, 3.14, 100, 37]
        // Using sort method to sort number items provide a wrong result. see below
        console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
        numbers.sort(function (a, b) {
          return a - b
        })
        
        console.log(numbers) // [3.14, 9.81, 37, 100]
        
        numbers.sort(function (a, b) {
          return b - a
        })
        console.log(numbers) //[100, 37, 9.81, 3.14]
    }
    
    // sorting object arrays
    {
        objArr.sort(function (a, b) {
            if (a.key < b.key) return -1
            if (a.key > b.key) return 1
            return 0
          })
          
          // or
          
          objArr.sort(function (a, b) {
            if (a['key'] < b['key']) return -1
            if (a['key'] > b['key']) return 1
            return 0
          })
          
          const users = [
            { name: 'Asabeneh', age: 150 },
            { name: 'Brook', age: 50 },
            { name: 'Eyob', age: 100 },
            { name: 'Elias', age: 22 },
          ]
          users.sort((a, b) => {
            if (a.age < b.age) return -1
            if (a.age > b.age) return 1
            return 0
          })
          console.log(users) // sorted ascending
    }