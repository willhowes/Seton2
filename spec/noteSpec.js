
describe('#getNote', () => {
  it('born with a body', () => {
    note = new Note()
    note.create("This is my first note which is definitely over 20 characters long")
    expect(note.getNote()).toBe("This is my first note which is definitely over 20 characters long")
  })
})

describe('#abbreviatedNote', () => {
  it('takes the number of chatacters to 20', () => {
    note = new Note()
    note.create("This is my first note which is definitely over 20 characters long")
    expect(note.abbreviatedNote()).toBe("This is my first not...")
  })
})

describe('#thisIsAFailingFunction', () => {
  it('this will most certainly fail', () => {
    note = new Note()
    note.create("This is my first note which is definitely over 20 characters long")
    expect(note.abbreviatedNote()).toBe("This is not mine...")
  })
})
