import './App.css';
import Navbar from './Components/Navbar.js';
import Externalcontainer from './Components/Externalcontainer/Externalcontainer.js';

function App() {

let countries = ['Argentina','Bolivia','Haiti','Panamá','Paraguay','Republica Dominincana','Uruguay'];
let brands = ['Brand 1','Brand 2','Brand 3','Brand 4'];
let statusProject = ['Evaluating','Open','Closed','On Hold','Cancelled'];

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

  },
  {
    id: 3,
    nameProject: 'Project 3',
    country: 'Brasil',
    brand: 'Brand 3',
    status: 'Closed',
    advance: '100%',
    initialDate: 'Feb/21',
    LaunchingDate: 'Feb/21'

  },
  {
    id: 4,
    nameProject: 'Project 4',
    country: 'Chile',
    brand: 'Brand 2',
    status: 'On Hold',
    advance: '10%',
    initialDate: 'Feb/21',
    LaunchingDate: 'Feb/21'

  }

]


  return (
    <div className="App">

      <Navbar
        // Elementos a pasar mediante props para ser usados en el componente
        countries = {countries}
      />

      <Externalcontainer
        projectData= {projectList}
        countries={countries}
        brands={brands}
        statusProject={statusProject}
      
      />

    </div>
  );
}

export default App;
