import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Pokemons from './pages/Pokemons';
import PokemonDetailPage from './pages/PokemonDetailPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='/pokemons'>
            <Route index element={<Pokemons/>}/>
            <Route path=":id" element={<PokemonDetailPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
