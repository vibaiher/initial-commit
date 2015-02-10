var expect = require('expect.js');

var SUT = require('../src/Acme.js');

describe("Acme", function() {

  it("magic is hidden but...", function() {
    var acme = new SUT.Acme();

    expect(acme.magic).to.be(false);
  });

  describe("feature", function() {

    it("does magic", function() {
      var acme = new SUT.Acme();

      acme.feature();

      expect(acme.magic).to.be(true);
    });

  });

});
