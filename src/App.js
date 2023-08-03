import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Zealsters from './components/Zealsters';
import './App.css';
import PersonItemDetails from './components/Zealsters/PersonItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact  path="/" element= {<Zealsters/>} />
        <Route exact path="/person/:id" element={<PersonItemDetails/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App; 
