import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import FoundPage from './pages/FoundPage';
import ItemDetails from './pages/ItemDetails';
import Report_Item from './pages/Report_Item';

const App = () => (
  <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/found' element={<FoundPage />} />
        <Route path='/report_item' element={<Report_Item />} />
        <Route path='/item/:id' element={<ItemDetails />} />
      </Route>
    </Routes>
  </>
);

export default App;
