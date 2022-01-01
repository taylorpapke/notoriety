describe('Object mutability', () => {
  const baseObject = { first: 1, second: 'two' }
  let mutableObject
  let actuallyNewObject

  beforeEach(() => {
    mutableObject = baseObject
    actuallyNewObject = { ...baseObject }
    mutableObject.third = 'something'
  });

  it('adding a property to an object reference mutates the original', () => {
    expect(mutableObject.first).toEqual(1)
    expect(baseObject.third).toEqual('something')
  });
});

describe('Object creation with spread', () => {
  const baseObject = { first: 1, second: 'two' }
  let actuallyNewObject

  beforeEach(() => {
    actuallyNewObject = { ...baseObject }
    baseObject.third = 'another'
  });

  it('the object created with spread doesnt change', () => {
    expect(actuallyNewObject.third).toBeUndefined()
  });
});