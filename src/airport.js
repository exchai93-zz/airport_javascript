'use strict;'
function Airport () {
  this.hangar = [];
  weather = new Weather();
}

Airport.prototype.planes = function() { return this.hangar; };

Airport.prototype.landPlane = function(plane) {
  if(weather.isStormy()) {
    throw new Error("Not able to land");
  } else {
    this.hangar.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  if(weather.isStormy()) {
    throw new Error("Not able to take off");
  } else {
    this.hangar.pop(plane);
  }
};
