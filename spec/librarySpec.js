const firstNote = { getNote: "My first note" }
const secondNote = { getNote: "This is a note which is longer than 20 chars"}
const thirdNote = { getNote: "Another one"}
const fourthNote = { getNote: "This note is bloody long, way longer than 20 chars"}


describe('#add', () => {
  it('Adds a note to the library', () => {
    let library = new Library;

    library.add(firstNote)
    console.log(library._notes)

    expect(library.viewAllNotes()).toBe("My first note")
  })
})

describe('#add', () => {
  it('returns the first 20 chars', () => {
    let library = new Library;

    library.add(secondNote)
    console.log(library._notes)

    expect(library.viewAllNotes()).toBe("This is a note which")
  })
})

describe('#add', () => {
  it('Returns multiple abbreviated notes', () => {
    let library = new Library;

    library.add(firstNote)
    library.add(secondNote)
    library.add(thirdNote)
    library.add(fourthNote)

    console.log(library._notes)
    console.log(library.viewAllNotes() + "this was printed")
    // expect(library._notes.length()).toBe(4)
    expect(library.viewAllNotes()).toBe("My first note")
  })
})
