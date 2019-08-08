function Note() {
  this._body = ""
}

Note.prototype.create = function(string) {
  this._body = string
};

Note.prototype.getNote = function () {
  return this._body
};

Note.prototype.abbreviatedNote = function () {
  return this._body.substr(0,20) + "..."
};

// var note = new Note
// note.create("hello world there")
