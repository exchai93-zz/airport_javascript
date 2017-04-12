'use strict';
describe('Airport', function() {
  var airport;
  var plane;


  describe('When weather is NOT stormy', function() {
    beforeEach(function(){
      airport = new Airport();
      plane = jasmine.createSpy('plane');
      spyOn(weather, 'isStormy').and.returnValue(false);
    });

    it('has no planes by default', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('confirms plane is in hangar array', function(){
      airport.landPlane(plane);
      expect(airport.planes()).toContain(plane);
    });

    it('confirms plane no longer in hangar array', function(){
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('When weather stormy', function() {

    it('raises an error for take off when weather is stormy', function(){
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function(){ airport.takeOff(plane);}).toThrowError("Not able to take off");
    });
  });

});
