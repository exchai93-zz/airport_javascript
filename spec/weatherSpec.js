console.log('Weather Spec has been required')
'use strict';
describe('Weather', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });
  xit('is stormy if even number', function(){
    // maybe stub rand or see if it returns a boolean 
    spyOn(weather, []'rand').and.returnValue(2);
    expect(weather.isStormy()).toEqual(true);
  });

});
