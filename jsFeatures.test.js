/*
 * Using `require` is one way to import functions from other modules. The other,
 * `import` is something we'll explore with React.
 */

const { expect } = require('@jest/globals');

const { myFirstFunction, howNotToUseConst, anArrowFunction, functionsAsParams } = require('./jsFeatures')


describe('JavaScript Exaples', () => {
  describe('First example function', () => {
    let functionResult
    
    beforeEach(() => {
      functionResult = myFirstFunction(3, 4)
    })
  
    it('should return the correct result', () => {
      expect(functionResult).toEqual(504)
    });
  });

  describe('Bad use of const', () => {
    // We'll cover the new keyword when we talk about classes
    const expectedError = new Error('Assignment to constant variable.')

    it('should throw an error', () => {
      expect(() => howNotToUseConst()).toThrowError(expectedError)
    });
  });

  describe('Example arrow functions', () => {
    let returnedFunction
    let result

    beforeEach(() => {
      returnedFunction = anArrowFunction()
      result = returnedFunction()
    });

    it('should return true from the returnd function', () => {
      expect(result).toEqual(true)
    });
  });


});