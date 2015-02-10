function Acme() {
  this.magic = false;
}

Acme.prototype.feature = function() {
  this.magic = true;
};

exports.Acme = Acme;
