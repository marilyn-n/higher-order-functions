const token = () => {
  return 'An anonymous assigned function was called'
}

const iAmOne = () => 1

const cb = () => 'The callback function was called'

const printFunctionReturn = (fn) => {
  console.log('I am going to call the function in the parameters, this is calling back the function in the parameters')
  const result = fn()
  console.log(result)
  return 'I just printed'
}

const functionToString = (fn, times = 1) => {
  return fn.toString().repeat(times)
}

const myFunction = (callback, name) => {
  console.log(callback())
  const myArrayName = name.split('')
  return myArrayName
}

const reverseStr = (str, cb1, cb2 ) => {
  const splitStr = str.split('')
  const myCb = cb1()
  const myCb2 = cb2()
  console.log(splitStr, myCb, myCb2)
  return splitStr.reverse().join(' ')
}

reverseStr('javaScript', token, cb)


myFunction(cb, 'Marilyna')
token()
printFunctionReturn(token)
functionToString(token)
iAmOne()
printFunctionReturn(iAmOne)
functionToString(iAmOne)
functionToString(iAmOne, 3)
cb()
printFunctionReturn(cb)
