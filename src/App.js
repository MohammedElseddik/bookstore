import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Books from './components/Books/Books';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='books' />
          <Route path='books' />
          <Route path='categories' />
        </Routes>
      </main>
      <Books />
    </BrowserRouter>
  );
}

export default App;
