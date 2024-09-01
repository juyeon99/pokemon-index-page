import {Link} from  'react-router-dom';

function PokemonCard({pokemon}) {
    const parts = pokemon.url.split('/');
    const number = parts[parts.length - 2];
    const paddedNumber = number.padStart(3, '0');
    const imgSrc = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/' + paddedNumber + '.png';

    return (
        <Link to={`/pokemons/${number}`}>
            <div className='pokemonCard' style={{backgroundColor: 'lightGray', padding: 10, margin: 10}}>
                <img src={imgSrc} style={{width: 100}}/>
                <h3>{pokemon.name}</h3>
                {/* <p><a href={pokemon.url}>상세보기 url: {pokemon.url}</a></p> */}
            </div>
        </Link>
    );
}

export default PokemonCard;