// JSON

// Converting JSON to JavaScript Object

// JSON.parse()
{
    const usersText = `{
        "users":[
          {
            "firstName":"Aaryan",
            "lastName":"Manghnani",
            "age":19,
            "email":"aar@aar.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`
        
        const usersObj = JSON.parse(usersText, undefined, 4)
        console.log(usersObj)
}

// Using a reviver function with JSON.parse()
{
    const usersText = `{
        "users":[
          {
            "firstName":"Aaryan",
            "lastName":"Manghnani",
            "age":19,
            "email":"aar@aar.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`
        
        const usersObj = JSON.parse(usersText, (key, value) => {
          let newValue =
            typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
          return newValue
        })
        console.log(usersObj)
}

// Converting Object to JSON
{
    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Aaryan: {
          email: 'aar@aar.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 19,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'brook@brook.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }
      
      const txt = JSON.stringify(users, undefined, 4)
      console.log(txt) // text means JSON- because json is a string form of an object.
}


// Using a Filter Array with JSON.stringify
{
    const user = {
        firstName: 'Aayush',
        lastName: 'Gaur',
        country: 'India',
        city: 'Jodhpur',
        email: 'aay@aay.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
        age: 19,
        isLoggedIn: false,
        points: 30
      }
      
      const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
      console.log(txt)
}