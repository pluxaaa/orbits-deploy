import { FC, useEffect, useState } from 'react'
import './styles/style.css'
import { Orbit } from './modules/ds';
import { getOrbitByName } from './modules/get-orbit-by-name';


const OrbitPage: FC = () => {
    
  const [orbit, setOrbit] = useState<Orbit>()

  useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString)
      const regionName = urlParams.get('orbit_name')
  
      const loadRegion = async () => {
          const result = await getOrbitByName(String(regionName))
          setOrbit(result)
      }
  
      loadRegion()

  }, []);


    return (
        <div>
            <div className="card-sub">
                <div className="card-content-sub">
                    <img src={`${orbit?.ImageURL}`} className="card_image" alt="картинка" />
                    <div className="right-content-sub">
                        <p>Статус: {orbit?.IsAvailable ? 'Доступна' : 'Недоступна'}</p>
                        <p>Апогей: {orbit?.Apogee}</p>
                        <p>Перигей: {orbit?.Perigee}</p>
                        <p>Наклонение: {orbit?.Inclination}</p>
                        <p>Описание: {orbit?.Description}</p>
                    </div>
                </div>
                <a className="button page_button" href="/orbits-deploy/">Назад</a>
            </div>
        </div>
    )
}

export default OrbitPage
