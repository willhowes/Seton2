function Note() {
  this._body = ""
}

Note.prototype.create = function(string, library) {
  this._body = string
  library.add(this)
};

Note.prototype.getNote = function () {
  return this._body
};

Note.prototype.abbreviatedNote = function () {
  return this._body.substr(0,20) + "..."
};

// var note = new Note
// note.create("hello world there")
