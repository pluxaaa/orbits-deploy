export const orbitsData = [
    {
        ID: 1,
        Name: 'Геостационарная орбита',
        IsAvailable: true,
        Apogee: '35786',
        Perigee: '35786',
        Inclination: '0',
        Description: 'asdsad',
        ImageURL: ''
    },
    {
        ID: 2,
        Name: 'Низкая околоземная орбита',
        IsAvailable: true,
        Apogee: '1000',
        Perigee: '1000',
        Inclination: '0',
        Description: '',
        ImageURL: ''
    },
    {
        ID: 3,
        Name: 'Средняя околоземная орбита',
        IsAvailable: true,
        Apogee: '10000',
        Perigee: '10000',
        Inclination: '0',
        Description: '',
        ImageURL: ''
    },
    {
        ID: 4,
        Name: 'Геопереходная орбита',
        IsAvailable: true,
        Apogee: '42164',
        Perigee: '250',
        Inclination: '0',
        Description: '',
        ImageURL: ''
    },
    {
        ID: 5,
        Name: 'Солнечно-синхронная орбита',
        IsAvailable: true,
        Apogee: '700',
        Perigee: '700',
        Inclination: '90',
        Description: '',
        ImageURL: ''
    },
    {
        ID: 6,
        Name: 'Молния',
        IsAvailable: true,
        Apogee: '12',
        Perigee: '21',
        Inclination: '63.4',
        Description: 'asdsad',
        ImageURL: ''
    }
]

export const getOrbitByName = async (orbitName: string) => {
    return orbitsData.find((orbit) => orbit.Name === orbitName);
};