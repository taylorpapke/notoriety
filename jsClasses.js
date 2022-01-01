class SomeObjectOfImportance {
  
  constructor(aProperty) {
    this.memberProperty = aProperty
  }

  aClassMethod() {
    return this.memberProperty
  }

  static aStaticMethod() {
    return "The same thing for every class object"
  }
}

class Rectangle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  print() {
    console.log(`x ${this.x} | y ${this.y}`) // Template string
  }

  exportRectangle() {
    return { x: this.x, y: this.y }
  }

  fromRectangle(otherRectangle) {
    const { x, y } = otherRectangle.exportRectangle()
    this.x = x
    this.y = y
  }
}

class Randomizer {
  apiKey = 'my-api-key'
  apiHost = 'my-api-host'
  
  static async getRandomWord() {
    fetch
  }
}

module.exports = { SomeObjectOfImportance }

/* Language Features to Describe:
  Promises
  Async/Await
  filter, map, reduce
  JavaScript For/of
  basic Math Methods
  Advanced Concepts
    - objects and changing values  
*/