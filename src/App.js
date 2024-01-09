import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import NoPage from './pages/NoPage';
import Gepel from './pages/Gepel';
import Rendez from './pages/Rendez';
import Valaszto from './pages/Valaszto';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="gepel" element={<Gepel />} />
      <Route path="rendez" element={<Rendez />} />
      <Route path="valaszto" element={<Valaszto />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
