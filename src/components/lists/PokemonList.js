import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PokemonCard from "../items/PokemonCard";
import {getPokemonsApi} from "../../apis/PokemonAPI";

function PokemonList() {
    // 포켓몬 정보 가져오기
    // api 요청 => state에 담기
    const result = useSelector(state => state.pokemonReducer);
    const pokemons = result.results;

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(getPokemonsApi())
        },
        []
    );

    return (
        pokemons && (
            <>
                <button onClick={() => dispatch(getPokemonsApi(result.previous))}>이전</button>
                <button onClick={() => dispatch(getPokemonsApi(result.next))}>다음</button>
                    
                <div className="itemBox">
                    <h3>총 포켓몬 수 : {result.count}</h3>
                    {pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon}/>)}
                </div>
            </>
        )
    );
}

export default PokemonList;