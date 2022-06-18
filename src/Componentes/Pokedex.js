import React from 'react'
import Pokemon from './Pokemon';

import Pagination from './Pagination';

const Pokedex = (props) => {
    const { pokemons, loading, page, totalPages, setPage } = props;

    const onLetfClickHandler = () => {
        if(page > 0 ) {
            setPage(page-1)
        }
    }

    const onRightClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }


    return (
        <div>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <Pagination

                    page={page+1}
                    setPage={setPage}
                    totalPages={totalPages}
                    onLetfClick={onLetfClickHandler}
                    onRightClick={onRightClickHandler}


                />
            </div>
            {loading ? (<div>Carregando, segura bixo</div>) :
                (<div className='pokedex-grid'>
                    {pokemons && pokemons.map((pokemon, index) => {

                        return (<Pokemon key={index} pokemon={pokemon}></Pokemon>)
                    })}


                </div>)}
        </div>
    )
}
export default Pokedex
