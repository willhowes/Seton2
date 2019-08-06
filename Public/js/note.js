function Note() {
  this._body = ""
}

Note.prototype.create = function(string) {
  this._body = string
};

Note.prototype.getNote = function () {
  return this._body
};
