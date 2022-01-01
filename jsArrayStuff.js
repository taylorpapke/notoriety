const interestingObject = {
  arraysForDays: [3, 5, 8, 'a', { anObjectProperty: 'a value' }, true, 9],
  filterExample: function () {
    return this.arraysForDays.filter((element) => typeof element === 'number')
  },
  mapExample: function() {
    return this.arraysForDays.map(
      element => {
        if (typeof element !== 'string') {
          return element.toString()
        } else {
          return element
        }
      })
  },
  reduceExample: function () {
    const reducer = (previousValue, currentValue) => {
      return previousValue + currentValue
    }
    const filteredForNums = this.filterExample()
    // remember that functions can be parameters
    return filteredForNums.reduce(reducer)
  }
}

function makeAQueue() {
  const likeAQueue = []
  // this would through an error if we tried to replace the array
  // e.g. likeAQueue = [2,3,4] BUT
  // even though this is a constant value, we can add elements to it
  Array.from([-1, -2, 3, -4, 5, -6]).forEach((item) => { likeAQueue.push(Math.abs(item)) })
  return likeAQueue
}

module.exports = {
  interestingObject,
  makeAQueue
}

// const popAnElement = likeAQueue.shift()
// console.log(`popped an element ${popAnElement}`)

// const baseObject = { first: 1, second: 'two' }
// const refToBaseObject = baseObject
// refToBaseObject.third = '3'

// console.log(`base object has element third: ${baseObject.third}`)

// const newObject = { ...baseObject, fourth: 4 }
// newObject.fifth = 5

// console.log(`base object keys ${baseObject.fourth}`)
// console.log(`new object ${newObject.third} and ${newObject.fifth}`)

// function restFunc(...arguments) {
//   const reducer = (previous, current) => { return previous + current}
//   const reduced = arguments.reduce(reducer)
//   return reduced
// }

// const reduced = restFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(`reduced ${reduced}`)