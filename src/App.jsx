import './App.css';
import CollectionPage from './components/Collections/CollectionPage';
import ExplorePage from './components/Explore/ExplorePage';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore/:id' element={<ExplorePage />} />
        <Route path='/collections' element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
