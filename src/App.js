import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Sitios from './components/SitiosDeInteres/Sitios';
import Alertas from './components/Alertas/Alertas';
import Inicio from "./components/Inicio/Inicio"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/Inicio' element = {<Inicio/>}/>
        <Route exact path='/Sitios' element = {<Sitios/>}/>
        <Route exact path='/Alertas' element = {<Alertas/>}/>
      </Routes>
    </div>
  );
}

export default App;
