describe('note and getNote', () => {
  it('born with a body', () => {
    note = new Note()
    note.create("This is my first note which is definitely over 20 characters long")
    expect(note.getNote()).toBe("This is my first note which is definitely over 20 characters long")
  })
})

// describe('note', () => {
//   it('born with a body', () => {
//     note = new Note()
//     note.create("This is my first note which is definitely over 20 characters long")
//     expect(note.getNote()).toBe("This is my first note which is definitely over 20 characters long")
//   })
// })
