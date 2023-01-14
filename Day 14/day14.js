// Error Handling

// try, catch, finally
{
    try {
        let lastName = 'Manghnani'
        let fullName = fistName + ' ' + lastName
      } catch (err) {
        console.log(err)
      }
}

{
    try {
        let lastName = 'Manghnani'
        let fullName = fistName + ' ' + lastName
      } catch (err) {
        console.error(err) // we can use console.log() or console.error()
      } finally {
        console.log('In any case I will be executed')
      }
}

{
    try {
        let lastName = 'Manghnani'
        let fullName = fistName + ' ' + lastName
      } catch (err) {
        console.log('Name of the error', err.name)
        console.log('Error message', err.message)
      } finally {
        console.log('In any case I will be executed')
      }
}

// throw
{
    const throwErrorExampleFun = () => {
        let message
        let x = prompt('Enter a number: ')
        try {
          if (x == '') throw 'empty'
          if (isNaN(x)) throw 'not a number'
          x = Number(x)
          if (x < 5) throw 'too low'
          if (x > 10) throw 'too high'
        } catch (err) {
          console.log(err)
        }
      }
      throwErrorExampleFun()
}

// Error Types

// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
{
    let firstName = 'Aaryan'
    let fullName = firstName + ' ' + lastName
    console.log(fullName)
}

// SyntaxError: A syntax error has occurred
{
    let square = 2 x 2
    console.log(square)
    console.log('Hello, world")
}

// TypeError: A type error has occurred
{
    let num = 10
    console.log(num.toLowerCase())
}