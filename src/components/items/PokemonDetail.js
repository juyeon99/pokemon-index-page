import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPokemonDetailApi} from '../../apis/PokemonAPI';

function PokemonDetail({id}) {
    const paddedNumber = id.padStart(3, '0');
    const imgSrc = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + paddedNumber + '.png';

    let pokemon = useSelector(state => state.pokemonReducer);

    console.log(pokemon)

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(getPokemonDetailApi(id));
        },
        []
    );

    const pokemonName = pokemon?.names?.filter(name => name.language.name === 'ko');
    const genera = pokemon?.genera?.filter(genera => genera.language.name === 'ko');
    const flavorText = pokemon?.flavor_text_entries?.filter(entry => entry.language.name === 'ko');

    const name = pokemonName?.[0]?.name || '정보 없음';
    const genus = genera?.[0]?.genus || '정보 없음';
    const allFlavorTexts = flavorText?.map(entry => entry.flavor_text.replace(/\n|\f/g, ' ')).join(' ') || '정보 없음';


    return (
        pokemon && (
            <>
                <img src={imgSrc} style={{width: 100}}/>
                <h3>ID: {pokemon.id}</h3>
                <h3>이름: {name}</h3>
                <h3>분류: {genus}</h3>
                <h3>특징: {allFlavorTexts}</h3>
            </>
        )
    );
}

export default PokemonDetail;