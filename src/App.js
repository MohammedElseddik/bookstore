import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='/books' />
          <Route path='/categories' />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
