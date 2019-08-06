function Library() {
  this._notes = []
}

Library.prototype.add = function (note) {
  this._notes.push(note)
};

Library.prototype.viewAllNotes = function () {

  return this._notes.map(function(note){
    return note.getNote().substr(0,20)

  })
};



// .substr(0,20)
