import './App.css';
import Navbar from './Components/Navbar.js';
import Externalcontainer from './Components/Externalcontainer/Externalcontainer.js';

function App() {

let projectList = [
  {
    id: 1,
    nameProject: 'Project 1',
    country: 'Argentina',
    brand: 'Brand 1',
    status: 'Open',
    advance: '70%',
    initialDate: 'Oct/21',
    LaunchingDate: 'Oct/21'

  },
  {
    id: 2,
    nameProject: 'Project 2',
    country: 'Uruguay',
    brand: 'Brand 1',
    status: 'Open',
    advance: '30%',
    initialDate: 'Nov/21',
    LaunchingDate: 'Feb/22'

  }

]


  return (
    <div className="App">

      <Navbar
        // Elementos a pasar mediante props para ser usados en el componente
        countries = {['Argentina','Bolivia','Haiti','Panamá','Paraguay','Republica Dominincana','Uruguay']}
      />

      <Externalcontainer
        projectData= {projectList}
      
      />

    </div>
  );
}

export default App;
