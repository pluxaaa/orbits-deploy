import { Orbit } from './ds';
import { orbitsData } from './orbitsData';

export const getAllOrbits = async (orbitName = ''): Promise<Orbit[]> => {
  return fetch('/api/orbits?orbit_name=' + String(orbitName))
    .then((response) => response.json())
    .catch (() => orbitsData)
};
