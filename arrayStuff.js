const arraysForDays = [3, 5, 8, 'a', { anObjectProperty: 'a value' }, true, 9]

const filteredForNums = arraysForDays.filter((element) => typeof element === 'number')
console.log(`filtered values: ${filteredForNums}`)
console.log(`The original array is the same ${arraysForDays}`)

const mappedValues = arraysForDays.map(
  element => {
    if (typeof element !== 'string') {
      return element.toString()
    } else {
      return element
    }
  })
console.log(`mapped values: ${mappedValues}`)
mappedValues.forEach(element => console.log(`typeof element ${typeof element}`))

const reducer = (previousValue, currentValue) => {
  return previousValue + currentValue
}
// remember, functions can be parameters
const reducedNumValues = filteredForNums.reduce(reducer)

const likeAQueue = []
// this would through an error if we tried to replace the array
// e.g. likeAQueue = [2,3,4] BUT
// even though this is a constant value, we can add elements to it
Array.from([-1, -2, 3, -4, 5, -6]).forEach((item) => { likeAQueue.push(Math.abs(item)) })

// notice that we're using a queue- or stack-like api method, 'push'
for (let element in likeAQueue) {
  console.log(`squared element: ${Math.abs(element)}`)
}

const popAnElement = likeAQueue.shift()
console.log(`popped an element ${popAnElement}`)

const baseObject = { first: 1, second: 'two' }
const refToBaseObject = baseObject
refToBaseObject.third = '3'

console.log(`base object has element third: ${baseObject.third}`)

const newObject = { ...baseObject, fourth: 4 }
newObject.fifth = 5

console.log(`base object keys ${baseObject.fourth}`)
console.log(`new object ${newObject.third} and ${newObject.fifth}`)

function restFunc(...arguments) {
  const reducer = (previous, current) => { return previous + current}
  return arguments.reduce(reducer)
}

const reduced = restFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(`reduced ${reduced}`)