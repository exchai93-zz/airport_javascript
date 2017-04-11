console.log('Weather Spec has been required')
'use strict';
describe('Weather', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('is stormy if even number', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('is stormy if even number', function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

});
