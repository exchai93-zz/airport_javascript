'use strict';
describe('Airport', function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('plane should confirm landing', function(){
    expect(airport.land).toBe(true);
  });
});
