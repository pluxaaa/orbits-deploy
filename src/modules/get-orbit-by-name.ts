import { Orbit } from './ds';
import { orbitsData } from './orbitsData';

export const getOrbitByName = async (orbitName = ''): Promise<Orbit> => {
  return fetch('/api/orbits/' + String(orbitName), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .catch(() => orbitsData.find((orbit) => orbit.Name === orbitName) as Orbit || {} as Orbit)
};