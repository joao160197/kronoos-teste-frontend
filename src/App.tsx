
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;