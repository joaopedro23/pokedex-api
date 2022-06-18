import React, {useContext} from "react"
import FavoriteContext from "./contexts/FavoritoContext"


const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    const logoapi = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"


    return (
        <nav>
            <div>
                <img
                    alt="pokemo-logo"
                    src={logoapi}
                    className="navbar-img"
                    />
            </div>
                    <div>{favoritePokemons.length}💓</div>
        </nav>
        
    );
};

export default Navbar;
