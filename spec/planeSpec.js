console.log('Plane Spec has been required successfully');
'use strict';
describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
    // airport = jasmine.createSpyObj('airport', ['landPlane']);
    airport = new Airport();
  });

  it('plane is able to land', function(){
    expect(plane.land(airport)).toEqual('Plane has landed');
  });

  it('plane is able to take off', function() {
    expect(plane.takeOff(airport)).toEqual('Plane has taken off');
  });

});
