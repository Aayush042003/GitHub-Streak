// Objects

//Windows Global Object
{
    a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
    b = 10 // this is a global scope variable and found in the window object
    function letsLearnScope() {
      console.log(a, b)
      if (true) {
        console.log(a, b)
      }
    }
    letsLearnScope()
    console.log(a, b) // accessible
}

//Global Scope
{
    let a = 'JavaScript' // is a global scope it will be found anywhere in this file
    let b = 10 // is a global scope it will be found anywhere in this file
    function letsLearnScope() {
      console.log(a, b) // JavaScript 10, accessible
      if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
      }
      console.log(a, b)
    }
    letsLearnScope()
    console.log(a, b) // JavaScript 10, accessible
}

// Local Scope
{
    let a = 'JavaScript' // is a global scope it will be found anywhere in this file
    let b = 10 // is a global scope it will be found anywhere in this file
    // Function scope
    function letsLearnScope() {
      console.log(a, b) // JavaScript 10, accessible
      let value = false
    // block scope
      if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 true
      }
      // we can not access c because c's scope is only the if block
      console.log(a, b, value) // JavaScript 10 true
    }
    letsLearnScope()
    console.log(a, b) // JavaScript 10, accessible
}
{
    function letsLearnScope() {
        var gravity = 9.81
        console.log(gravity)
      
      }
      // console.log(gravity), Uncaught ReferenceError: gravity is not defined
      
      if (true){
        var gravity = 9.81
        console.log(gravity) // 9.81
      }
      console.log(gravity)  // 9.81
      
      for(var i = 0; i < 3; i++){
        console.log(i) // 0, 1, 2
      }
      console.log(i) // 3
}
{
//scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  // console.log(i), Uncaught ReferenceError: i is not defined
}

// Creating empty object
{
    const person = {}
}

// Creating object with values
{
    const rectangle = {
        length: 20,
        width: 20
      }
      console.log(rectangle) // {length: 20, width: 20}
}

// Getting values from an object
{
    const person = {
        firstName: 'Aaryan',
        lastName: 'Manghnani',
        age: 19,
        country: 'India',
        city: 'Jodhpur',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Node',
          'MongoDB',
          'Python',
        ],
        getFullName: function() {
          return `${this.firstName}${this.lastName}`
        },
        'phone number': '+3584545454545'
      }
      
      // accessing values using .
      console.log(person.firstName)
      console.log(person.lastName)
      console.log(person.age)
      console.log(person.location) // undefined
      
      // value can be accessed using square bracket and key name
      console.log(person['firstName'])
      console.log(person['lastName'])
      console.log(person['age'])
      console.log(person['location']) // undefined
      
      // for instance to access the phone number we only use the square bracket method
      console.log(person['phone number'])
}

// Creating object methods
{
    const person = {
        firstName: 'Aaryan',
        lastName: 'Manghnani',
        age: 19,
        country: 'India',
        city: 'Jodhpur',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Node',
          'MongoDB',
          'Python',
        ],
        getFullName: function() {
          return `${this.firstName} ${this.lastName}`
        }
      }
      
      console.log(person.getFullName())
      // Aaryan Manghnani
}

// Setting new key for object
{
    const person = {
        firstName: 'Aaryan',
        lastName: 'Manghnani',
        age: 19,
        country: 'India',
        city: 'Jodhpur',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Node',
          'MongoDB',
          'Python',
        ],
        getFullName: function() {
          return `${this.firstName} ${this.lastName}`
        }
      }
      person.nationality = 'Ethiopian'
      person.country = 'Finland'
      person.title = 'teacher'
      person.skills.push('Meteor')
      person.skills.push('SasS')
      person.isMarried = true
      
      person.getPersonInfo = function() {
        let skillsWithoutLastSkill = this.skills
          .splice(0, this.skills.length - 1)
          .join(', ')
        let lastSkill = this.skills.splice(this.skills.length - 1)[0]
      
        let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
        let fullName = this.getFullName()
        let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
        return statement
      }
      console.log(person)
      console.log(person.getPersonInfo())
}

// Object.assign()
{
    const person = {
        firstName: 'Aaryan',
        age: 19,
        country: 'India',
        city:'Jodhpur',
        skills: ['HTML', 'CSS', 'JS'],
        title: 'Student',
        address: {
          street: 'Sardarpura 1',
          pobox: 342001,
          city: 'Jodhpur'
        },
        getPersonInfo: function() {
          return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
        }
      }
      
      //Object methods: Object.assign, Object.keys, Object.values, Object.entries
      //hasOwnProperty
      
      const copyPerson = Object.assign({}, person)
      console.log(copyPerson)

      // Object.keys()
      const keys = Object.keys(copyPerson)
      console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
      const address = Object.keys(copyPerson.address)
      console.log(address) //['street', 'pobox', 'city']

      // Object.values()
      const values = Object.values(copyPerson)
      console.log(values)

      // Object.entries()
      const entries = Object.entries(copyPerson)
      console.log(entries)

      // hasOwnProperty()
      console.log(copyPerson.hasOwnProperty('name'))
      console.log(copyPerson.hasOwnProperty('score'))
}