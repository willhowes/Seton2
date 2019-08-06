<<<<<<< HEAD
=======
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
>>>>>>> 73ac7e75782381856f32f3646a2d762fcde808f6
