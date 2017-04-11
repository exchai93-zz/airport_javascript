'use strict;'
function Airport () {
  this.hangar = [];
}

Airport.prototype.planes = function() { return this.hangar; };

Airport.prototype.landPlane = function(plane) {
  debugger;
  this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if(weather.isStormy()===true){
  } else {
    this.hangar.pop(plane);
  }
};



// need to create a function in airport that calls upon plane i.
