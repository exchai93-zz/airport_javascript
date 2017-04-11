'use strict;'
function Airport () {
  this.hangar = [];
}

Airport.prototype.planes = function() { return this.hangar; };

Airport.prototype.landPlane = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane){
  this.hangar.pop(plane);
};
