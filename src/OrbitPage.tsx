import { FC, useEffect } from 'react'
import './styles/style.css'
import { useParams } from 'react-router-dom';
import NavigationMain from './components/NavigationMain';
import Breadcrumbs from './components/Breadcrumbs';
import { orbitsData } from './modules/orbitsData';


const OrbitPage: FC = () => {
    const { orbit_name } = useParams();
    const orbit = orbitsData.find((orbit) => orbit.Name === orbit_name);

    useEffect(() => {
        console.log("orbit_name: ", orbit_name);
    }, [orbit_name]);


    return (
        <div>
            <NavigationMain/>
            <Breadcrumbs/>
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
                <a className="button page_button" href="../orbits">Назад</a>
            </div>
        </div>
    )
}

export default OrbitPage
