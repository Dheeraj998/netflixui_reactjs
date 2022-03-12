
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar'
import RowPost from './Components/RowPost/RowPost';
import {action,originals} from './Urls'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Original'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
