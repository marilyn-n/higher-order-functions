// namespace: global

const token = (p) => {
  return 'An anonymous assigned function was called'
}
// namespace: global, token

const iAmOne = () => 1
// namespace: global, token, iAmOne

const cb = () => 'The callback function was called'
// namespace: global, token, iAmOne, cb

const printFunctionReturn = (fn) => {
  // namespace: global, token, iAmOne, cb, fn
  console.log('I am going to call the function in the parameters, this is calling back the function in the parameters')
  const result = fn()
  // namespace: global, token, iAmOne, cb, fn, result
  console.log(result)
  return 'I just printed'
}
// namespace: global, token, iAmOne, cb, printFunctionReturn


const functionToString = (fn, times = 1) => {
  // namespace: global, token, iAmOne, cb, printFunctionReturn, fn, times
  return fn.toString().repeat(times)
}
// namespace: global, token, iAmOne, cb, printFunctionReturn, functionToString

const myFunction = (callback, name) => {
  console.log(callback())
  const myArrayName = name.split('')
  return myArrayName
}

// namespace: global, token, iAmOne, cb, printFunctionReturn, functionToString, myfunction


const reverseStr = (str, cb1, cb2 ) => {
  const splitStr = str.split('')
  const myCb = cb1()
  const myCb2 = cb2()
  console.log(splitStr, myCb, myCb2)
  return splitStr.reverse().join(' ')
}

// namespace: global, token, iAmOne, cb, printFunctionReturn, functionToString, myfunction, reverseStr

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
