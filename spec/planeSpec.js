'use strict';
describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe('plane is able to land', function(){
    expect(plane.land).not.toBeUndefined()
  });

});
