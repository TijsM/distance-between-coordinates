export type Coordinate = {
  lat: number;
  lon: number;
  altitude?: number | undefined;
  time?: Date;
};

// source of algorithm: https://www.geodatasource.com/developers/javascript
export function getDistanceBetweenTwoPoints(cord1: Coordinate, cord2: Coordinate) {
  if (cord1.lat === cord2.lat && cord1.lon === cord2.lon) {
    return 0;
  }

  const radlat1 = (Math.PI * cord1.lat) / 180;
  const radlat2 = (Math.PI * cord2.lat) / 180;

  const theta = cord1.lon - cord2.lon;
  const radtheta = (Math.PI * theta) / 180;

  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  if (dist > 1) {
    dist = 1;
  }

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344; // convert miles to km

  return dist;
}

export function getTotalDistance(coordinates: Coordinate[]) {
  coordinates = coordinates.filter((cord) => {
    if (cord.lat && cord.lon) {
      return true;
    }
  });

  let totalDistance = 0;

  if (!coordinates) {
    return 0;
  }

  if (coordinates.length < 2) {
    return 0;
  }

  for (let i = 0; i < coordinates.length - 2; i++) {
    if (!coordinates[i].lon || !coordinates[i].lat || !coordinates[i + 1].lon || !coordinates[i + 1].lat) {
      totalDistance = totalDistance;
    }
    totalDistance = totalDistance + getDistanceBetweenTwoPoints(coordinates[i], coordinates[i + 1]);
  }

  return totalDistance.toFixed(2);
}
