import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Chartsdashboard from './Pages/Charts/ChartsDashboard';
import Temperature from './Pages/Charts/Temperature/Temperature';
import CarbonDioxide from './Pages/Charts/Co2/Co2';
import Methane from './Pages/Charts/Methane/Methane';
import NitrousOxide from './Pages/Charts/NitrousOxide/NitrousOxide';
import ArcticData from './Pages/Charts/ArcticData/ArcticData';

function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<h1>home</h1>}/>
       <Route path='charts' element={<Chartsdashboard />}>
        <Route index element={<Temperature />}/>
        <Route path='co2' element={<CarbonDioxide />}/>
        <Route path='methane' element={<Methane />}/>
        <Route path='nitrous' element={<NitrousOxide />}/>
        <Route path='arctic' element={<ArcticData />}/>
       </Route>
          
       
       
    </Routes>
    </BrowserRouter>
  );
}

export default App;
