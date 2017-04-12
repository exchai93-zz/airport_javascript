'use strict';

describe('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off', function(){
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents take off when stormy', function() {
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(function() { airport.takeOff(plane); }).toThrowError("Not able to take off");
  });

  it('prevents landing when stormy', function() {
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(function(){ airport.landPlane(plane);}).toThrowError("Not able to land");
  });

// doesn't throw an error when not stormy (for take off and landing)
});
