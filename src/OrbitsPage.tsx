import React, { FC, useEffect, useState } from 'react';
import './styles/style.css';
import { Orbit } from './modules/ds';
import OrbitCard from './components/OrbitCard';

import { getAllOrbits } from './modules/get-all-orbits';


const OrbitsPage: FC = () => {
    const [orbits, setOrbits] = useState<Orbit[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        var orbitName = urlParams.get('orbit_name') || "";
        setSearchText(orbitName);
    
        const loadOrbits = async () => {
            const result = await getAllOrbits(orbitName);
            console.log(result);
            setOrbits(result);
        }
    
        loadOrbits();
      }, []);
    

    const handleStatusChange = (orbitName: string, newStatus: boolean) => {
        setOrbits((orbits) =>
            orbits.map((orbit) =>
                orbit.Name === orbitName ? { ...orbit, IsAvailable: newStatus } : orbit
            )
        );
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `/orbits-deploy/?orbit_name=${searchText}`;
    };

    return (
        <div>
            <div className="search-form">
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        id="orbit_search"
                        name="orbit_name"
                        placeholder="Введите название"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <input type="submit" className="button" value="Поиск"/>
                </form>
            </div>
            <div className="card_group">
                {orbits.map((orbit, index) => (
                    <OrbitCard
                        key={index}
                        imageUrl={orbit.ImageURL}
                        orbitName={orbit.Name}
                        orbitStatus={orbit.IsAvailable}
                        orbitDetailed={window.location.href.split('?')[0]+"orbit?orbit_name="+orbit.Name}
                        changeStatus={``}
                        onStatusChange={handleStatusChange}
                    ></OrbitCard>
                ))}
            </div>
        </div>
    );
};

export default OrbitsPage;
