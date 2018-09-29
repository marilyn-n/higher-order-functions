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

A function has a callback if one or more parameters:
* is a function AND
* is executed, or called back, in the main function body.

### Synchronous callback functions


### Asynchronous callback functions

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
