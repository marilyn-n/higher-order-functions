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

token()
printFunctionReturn(token)
functionToString(token)
iAmOne()
printFunctionReturn(iAmOne)
functionToString(iAmOne)
functionToString(iAmOne, 3)
cb()
printFunctionReturn(cb)


arr.map(cb)
arr.filter(cb)

const myCB = (req, res, n) => {}

router.get('home', myCB)