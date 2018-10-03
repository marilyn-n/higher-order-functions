const makeAdder = (x) => {
  const fn = ((y) => {
    return (x + y)
  })
  return fn
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.console.log(add5(2))
console.console.log(add10(2))