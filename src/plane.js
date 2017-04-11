'use strict';
function Plane (){}

Plane.prototype.land = function(airport){
  airport.landPlane(this);
  return 'Plane has landed';
};

Plane.prototype.takeOff = function(airport){
  return 'Plane has taken off';
};
