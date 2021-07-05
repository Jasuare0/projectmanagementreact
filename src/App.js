import './App.css';
import Navbar from './Components/Navbar.js';
import Externalcontainer from './Components/Externalcontainer/Externalcontainer.js';

function App() {
  return (
    <div className="App">

      <Navbar
        // Elementos a pasar mediante props para ser usados en el componente
        countries = {['Argentina','Bolivia','Haiti','Panamá','Paraguay','Republica Dominincana','Uruguay']}
      />

      <Externalcontainer/>

    </div>
  );
}

export default App;
