// Web Storages

// Setting item to the  localStorage

// Storing string in a localStorage
{
    localStorage.setItem('firstName', 'Aayush') // since the value is string we do not stringify it
    console.log(localStorage)
}

// String number in a local storage
{
    localStorage.setItem('age', 19)
    console.log(localStorage)
}

// Storing an array in a localStorage
{
    const skills = ['HTML', 'CSS', 'JS', 'React']
    //Skills array has to be stringified first to keep the format.
    const skillsJSON = JSON.stringify(skills, undefined, 4)
    localStorage.setItem('skills', skillsJSON)
    console.log(localStorage)
}
{
    let skills = [
        { tech: 'HTML', level: 10 },
        { tech: 'CSS', level: 9 },
        { tech: 'JS', level: 8 },
        { tech: 'React', level: 9 },
        { tech: 'Redux', level: 10 },
        { tech: 'Node', level: 8 },
        { tech: 'MongoDB', level: 8 }
      ]
      
      let skillJSON = JSON.stringify(skills)
      localStorage.setItem('skills', skillJSON)
}

// Storing an object in localStorage
{
    const user = {
        firstName: 'Aayush',
        age: 19,
        skills: ['HTML', 'CSS', 'JS', 'React']
      }
      
      const userText = JSON.stringify(user, undefined, 4)
      localStorage.setItem('user', userText)

// Getting item from localStorage
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills)
// 'Asabeneh', '200', '['HTML','CSS','JS','React']'

// As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)
}

// Clearing the localStorage
{
    localStorage.clear()
}