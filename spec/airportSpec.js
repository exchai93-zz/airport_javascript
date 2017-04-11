'use strict';
describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('confirms plane is in hangar array', function(){
    airport.landPlane(plane);
    expect(airport.planes()).toEqual([plane]);
  });

});
