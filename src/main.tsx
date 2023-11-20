import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import OrbitsPage from './OrbitsPage'
import OrbitPage from './OrbitPage'
import NavigationMain from './components/NavigationMain'
import Breadcrumbs from './components/Breadcrumbs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationMain />
      <Breadcrumbs />
      <Routes>
        <Route path="/orbits-deploy" Component={OrbitsPage} />
        <Route path="/orbits-deploy/orbit" Component={OrbitPage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)