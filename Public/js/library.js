function Library() {
  this._notes = []
}

Library.prototype.add = function (note) {
  this._notes.push(note)
};

Library.prototype.viewAllNotes = function () {

  return this._notes.map(function(note){
    return note.getNote()

  })
};

Library.prototype.viewAllAbbreviatedNotes = function () {

  return this._notes.map(function(note){
    return note.abbreviatedNote()

  })
};

Library.prototype.findNote = function (noteBody) {
  foundNote = []
  this._notes.map(function(note){
    if (note.abbreviatedNote() === noteBody){
      foundNote.push(note.getNote())
    }
  })
  return foundNote.join('')
};
