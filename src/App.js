import './App.css';
import Dashboard from './sb-admin/Dashboard';
import Sidebar from './sb-admin/Sidebar';
import Charts from './sb-admin/Charts';
import Pages from './sb-admin/Pages';
import Tables from './sb-admin/Tables';
import Utilities from './sb-admin/Utilities';
import Component from './sb-admin/Component';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return <>
  <div id="wrapper">
    <BrowserRouter>
<Sidebar/>
<Routes>
<Route path='dashboard'element={<Dashboard />}/>
<Route path='component'element={<Component />}/>
<Route path='utilities'element={<Utilities />}/>
<Route path='page'element={<Pages />}/>
<Route path='charts'element={<Charts />}/>
<Route path='tables'element={<Tables />}/>
<Route path='*'element={<Navigate to='dashboard' />}/>
</Routes>
</BrowserRouter>
</div>
   
  </>
}

export default App;