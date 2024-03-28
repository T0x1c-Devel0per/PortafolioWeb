import React from 'react';
import ReactDOM from 'react-dom';
import { ReactNebula } from "@flodlc/nebula";
import Navbar  from './Components/NavBar/NavBar'
import Preview from './Components/preview/Preview';
import Graph from './Components/Graph/Graph';
import Proyects from './Components/Proyects/Proyects';
import Profecional from './Components/Profecional/Profecional'
import Photos from './Components/Photos/Photos';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Miscellaneous/CSS/Stars.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configura willReadFrequently en true.

// Luego puedes realizar tus operaciones de getImageData u otras operaciones relacionadas con canvas aquí.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactNebula
      config={{
        "starsCount": 250,
        "starsColor": "#FFFFFF",
        "starsRotationSpeed": 10,
        "cometFrequence": 50,
        "nebulasIntensity": 10,
        "bgColor": "rgb(8,8,8)",
        "sunScale": 3,
        "planetsScale": 3,
        "solarSystemOrbite": 0,
        "solarSystemSpeedOrbit": 25,
      }}
    />
    <Preview />
    <Navbar/>
    <Profecional />
    <Photos/>
    
    <Graph />
    <Proyects />
  </React.StrictMode>
);
