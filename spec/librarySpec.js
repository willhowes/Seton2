// SPIES...

var firstNote = { abbreviatedNote : function() {
  return "My first note"
}, getNote : function() {
  return "Another note here we go"} }


var secondNote = { getNote : function() {
  return "This is a note which is longer than 20 chars"
}, abbreviatedNote : function() {
  return "Short note"} }


var thirdNote = { getNote : function() {
  return "Another one"
}}


var fourthNote = { getNote : function() {
  return "This note is bloody long, way longer than 20 chars"
}}
var abbreviatedNoteAnother = { abbreviatedNote : function() {
  return "Another one"
}, getNote : function() {
  return "Another one here which is more than 20 chars"}}

// TESTS...

describe('#add', () => {
  it('Adds a note to the library', () => {
    let library = new Library;

    library.add(firstNote)

    expect(library.viewAllNotes()).toBe("Another note here we go")
  })
})

describe('#viewAllNotes', () => {
  it('returns all the notes added', () => {
    let library = new Library;

    library.add(secondNote)
    library.add(thirdNote)

    expect(library.viewAllNotes()).toBe("This is a note which is longer than 20 chars,Another one")
  })
})

describe('#findNote', () => {
  it('returns all the notes added', () => {
    let library = new Library;

    library.add(firstNote)
    library.add(secondNote)
    library.add(abbreviatedNoteAnother)

    expect(library.findNote("Another one")).toBe("Another one here which is more than 20 chars")
  })
})
