'use strict;'
function Airport () {
  this.hangar = [];
}

Airport.prototype.planes = function() { return this.hangar; };

Airport.prototype.landPlane = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if(this._checkWeather()) {
    throw new Error("Not able to take off");
  } else {
    this.hangar.pop(plane);
  }
};

Airport.prototype._checkWeather = function () {
  weather = new Weather();
  weather.isStormy();
};
