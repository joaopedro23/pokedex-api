import React from "react"

const FavoriteContext = React.createContext ({
    FavoritePokemons: [],
    updateFavoritoPokemons: (id) => null
})
export const FavoritoProvider = FavoriteContext.Provider

export default FavoriteContext;