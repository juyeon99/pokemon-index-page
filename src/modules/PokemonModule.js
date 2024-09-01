import {createActions, handleActions} from 'redux-actions';

/* ----- Initial State ----- */
// const initialState = [
//     {
//         id: 0,
//         name: ''
//     }
// ];
const initialState = {
    pokemons: [],
    pokemonDetail: null
};

/* ----- Action ----- */
// action type 설정
export const GET_POKEMONS = 'pokemons/GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'pokemons/GET_POKEMON_DETAIL';

// 포켓몬 관련 action 함수
const actions = createActions({
    [GET_POKEMONS]: (payload) => payload,
    [GET_POKEMON_DETAIL]: (payload) => payload
});

/* ----- Reducer ----- */
const pokemonReducer = handleActions(
    {
        [GET_POKEMONS]: (state, {payload}) => {
            return payload;
        },
        [GET_POKEMON_DETAIL]: (state, {payload}) => {
            return payload;
        }
    }, initialState
);

export default pokemonReducer;