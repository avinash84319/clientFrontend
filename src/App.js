import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import ProvidersList from './screens/Providers';
import ProviderServices from './screens/ProviderServices';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/providersList" element={<ProvidersList />} />
          <Route path="/provider/:id" element={<ProviderServices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
