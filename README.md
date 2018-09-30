# Higher Order Functions

## First class citizen
JavaScript treats functions as first class citizens. This means that a function can be assigned to a token:

```
const token = () => {
  return 'I am a function assigned to a token'
}

```

## Functions of Higher order

A function is higher order if:

Some of it's parameters are expected to be functions, e.g.

``` js
const token = () => {
  return 'An anonymous assigned function was called'
}

const iAmOne = () => 1
const cb = () => 'The callback function was called'


const printFunctionReturn = (fn) => {
  const result = fn()
  console.log(result)
  return 'I just printed'
}

const functionToString = (fn, times = 1) => {
  return fn.toString().repeat(times)
}

token()
printFunctionReturn(token)
functionToString(token)
iAmOne()
printFunctionReturn(iAmOne)
functionToString(iAmOne)
functionToString(iAmOne, 3)
cb()
printFunctionReturn(cb)
```
### Functions with callbacks

A callback function is a function passed into another function as an argument, a function has a callback if one or more parameters:
* is a function AND
* is executed, or called back, in the main function body.

### Synchronous callback

Synchronous callback functions are executed immediately by the JS interpreter, it doesnt matter how much time it takes, it will pause until the function task has completed and then will continue with the next line of code. This is called blocking behaviour - the JS interpreter will wait for a syncrhonous function to complete. 

### Asynchronous callback

Asynchronous callback functions means that JS can do many different tasks at the same time, and come back with the easiest task, while in the background its doing other tasks.


Another type of higher order function is one that returns a function. 

``` js
const greetingMaker = (language) => {
  const result = language === 'English' 
    ? () => console.log('Hello')
    : () => console.log('Hola')
  return result
}

const saludo = greetingMaker('Spanish')
const hi = greetingMaker('English')
saludo()
hi()

```
