class SomeObjectOfImportance {
  constructor(aProperty) {
    this.memberProperty = aProperty;
  }

  aClassMethod() {
    return this.memberProperty;
  }

  static aStaticMethod() {
    return 'The same thing for every class object';
  }
}

class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    console.log(`x ${this.x} | y ${this.y}`); // Template string
  }

  exportRectangle() {
    return { x: this.x, y: this.y };
  }

  fromRectangle(otherRectangle) {
    const { x, y } = otherRectangle.exportRectangle();
    this.x = x;
    this.y = y;
  }
}

class Randomizer {
  static async randomWordPromise() {
    try {
      const response = await fetch(
        'https://wordsapiv1.p.rapidapi.com/words/?random=true',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'your-api-key-here',
            'x-rapidapi-host': 'api-host-here',
          },
        }
      )
      const randomWord = JSON.parse(response).word
      return randomWord
    } catch (error) {
      console.log(`an error occured ${error}`)
    } finally {
      console.log('this will always execute after the above blocks')
    }
  }
}

module.exports = { SomeObjectOfImportance }

const randomWord = await Randomizer.randomWordPromise()
console.log('random word with await ', randomWord)

Randomizer.randomWordPromise().then((word) => console.log('random word with then ', word))
