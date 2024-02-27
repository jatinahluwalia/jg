import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import JG_Group from './pages/JG_Group.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/jg_group/" element={<JG_Group />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
