// Promises

// Callbacks
// In this case the err has a value and it will return the err block.
{
    const doSomething = callback => {
        setTimeout(() => {
          const skills = ['HTML', 'CSS', 'JS']
          callback('It did not go well', skills)
        }, 2000)
      }
      
      const callback = (err, result) => {
        if (err) {
          return console.log(err)
        }
        return console.log(result)
      }
      
      doSomething(callback)
}

// In this case the err is false and it will return the else block which is the result.
{
    const doSomething = callback => {
        setTimeout(() => {
          const skills = ['HTML', 'CSS', 'JS']
          callback(false, skills)
        }, 2000)
      }
      
      doSomething((err, result) => {
        if (err) {
          return console.log(err)
        }
        return console.log(result)
      })
}

// Promise Constructor
{
// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
}

// The above promise has been settled with resolve. Let us another example when the promise is settled with reject.
{
    const doPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const skills = ['HTML', 'CSS', 'JS']
          if (skills.includes('Node')) {
            resolve('fullstack developer')
          } else {
            reject('Something wrong has happened')
          }
        }, 2000)
      })
      
      doPromise
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
}

// Fetch API
{
    const url = 'https://restcountries.com/v2/all' // countries api
    fetch(url)
      .then(response => response.json()) // accessing the API data as JSON
      .then(data => {
        // getting the data
        console.log(data)
      })
      .catch(error => console.error(error)) // handling error if something wrong happens
}

// Async and Await
{
    const square = async function (n) {
        return n * n
      }
      
      square(2)
}
{
    const square = async function (n) {
        return n * n
      }
      const value = await square(2)
      console.log(value)
}

// Fetch API using promise method
{
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
}

// Fetch API using async and await method
{
    const fetchData = async () => {
        try {
          const response = await fetch(url)
          const countries = await response.json()
          console.log(countries)
        } catch (err) {
          console.error(err)
        }
      }
      console.log('===== async and await')
      fetchData()
}