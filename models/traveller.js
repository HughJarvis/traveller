const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startPoints = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return startPoints
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endPoints = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return endPoints
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    let totalDistance = 0
    this.journeys.forEach((journey) => {
      totalDistance += journey.distance
  })
    return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
