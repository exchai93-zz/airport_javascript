console.log('Weather Spec has been required')
'use strict';
describe('Weather', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });
  xit('is stormy if even number', function(){
    spyOn(weather, []'rand').and.returnValue(2);
    expect(weather.isStormy()).toEqual(true);
  });

});
