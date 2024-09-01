import {GET_POKEMON_DETAIL,GET_POKEMONS} from "../modules/PokemonModule";

export function getPokemonsApi(url) {
    const requestURL = url || 'https://pokeapi.co/api/v2/pokemon';

    return async function getPokemons(dispatch, getState) {
        const response = await fetch(requestURL)
                    .then(res => res.json());

        dispatch(
            {
                type: GET_POKEMONS, 
                payload: response
            }
        );
    }
}

export function getPokemonDetailApi(id) {
    const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

    return async function getPokemons(dispatch, getState) {
        const response = await fetch(requestURL)
                    .then(res => res.json());

        dispatch(
            {
                type: GET_POKEMON_DETAIL, 
                payload: response
            }
        );
    }
}