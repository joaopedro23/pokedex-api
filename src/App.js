
import React, {useEffect,useState} from 'react';
import { getPokemons, getPokemonData, searchPokemon } from './api';
import './App.css';
import Navbar from './Componentes/NavBar';
import Pokedex from './Componentes/Pokedex';
import SearchBar from './Componentes/SearchBar';
import { FavoritoProvider } from './Componentes/contexts/FavoritoContext';

const favoriteKey = "f"

function App() {


  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [pokemons, setpokemons] = useState( [] );
  const [favorites, setFavorites ] = useState ([])
 
  const itensPerPage = 25 
  const fetchPokemons = async (page) => {
     try {
       setLoading(true)
       const data = await getPokemons(itensPerPage, itensPerPage * page)
       const promises = data.results.map(async (pokemon) => {
         return await getPokemonData(pokemon.url)
       });
      const results = await Promise.all(promises);
       setpokemons(results)
       setLoading(false)
       setTotalPages(Math.ceil(data.count / itensPerPage))
     } catch (error) {
       console.log("fetchPokemons error", error)
     }
  }

  const loadFavoritoPokemons = () => {
   const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
   setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritoPokemons()
  }, [] )


  useEffect(() => {
    console.log("carregou")
    fetchPokemons()
  }, [page] )
  
  function updateFavoritePokemons(name) {
    const updateFavoritos = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updateFavoritos.splice(favoriteIndex, 1);
    } else {
      updateFavoritos.push(name);
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updateFavoritos))
    setFavorites(updateFavoritos);
  }
    const onSearchHandler = async (pokemon) => {
      if( !pokemon) {
        return fetchPokemons()
      }

      setLoading(true)
      setNotFound(false)

      const result = await searchPokemon(pokemon) 
      if(!result) {
        setNotFound(true)
      } else {
        setpokemons([result])
        setPage(0)
        setTotalPages(1)
      }
      setLoading(false)
    }


  return (
    <FavoritoProvider
    value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>

    <div>
      <Navbar/>

      <SearchBar onSearch={onSearchHandler}/>
      {notFound ? (
        <div class-name='not-found-text'> ai voce xoco?! </div>
        ):
    (<Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />)}
      </div>
      </FavoritoProvider>
  )
}

export default App;
