function Note() {
  this._body = ""
}

Note.prototype.create = function(string, library) {
  library.add(this)
  return this._body = string
};

Note.prototype.getNote = function () {
  return this._body
};

Note.prototype.abbreviatedNote = function () {
  return this._body.substr(0,20) + "..."
};
