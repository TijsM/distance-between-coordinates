# Calculate Distance between coordinates

- get the distance between two points
- get the distance between a list of points

## Installation

### NPM

```
npm install calculate-distance-between-coordinates
```

### Yarn

```
yarn add calculate-distance-between-coordinates
```

## Methods

### getDistanceBetweenTwoPoints

```
function getDistanceBetweenTwoPoints(
  cord1: Coordinate,
  cord2: Coordinate,
  unit: Unit = 'km',
): number
```

### getTotalDistance

```
export function getTotalDistance(
  coordinates: Coordinate[],
  unit: Unit = "km"
): number
```

## Types

```
type Coordinate = {
  lat: number;
  lon: number;
};

type Unit = 'km' | 'mile';

```
