console.log('Plane Spec has been required successfully');
'use strict';
describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('plane is able to land', function(){
    expect(plane.land()).toEqual('Plane has landed');
  });


});
