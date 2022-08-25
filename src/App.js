import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Temperature from './Pages/Dashboard/Temperature/Temperature';
import CarbonDioxide from './Pages/Dashboard/Co2/Co2';
import Methane from './Pages/Dashboard/Methane/Methane';
import NitrousOxide from './Pages/Dashboard/NitrousOxide/NitrousOxide';
import ArcticData from './Pages/Dashboard/ArcticData/ArcticData';
import PageNotFound from './Component/PageNotFound/PageNotFound';

function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Temperature />}/>
          <Route path='co2' element={<CarbonDioxide />}/>
          <Route path='methane' element={<Methane />}/>
          <Route path='nitrous' element={<NitrousOxide />}/>
          <Route path='arctic' element={<ArcticData />}/>
       </Route>
       <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
