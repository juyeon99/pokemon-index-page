import PokemonDetail from "../components/items/PokemonDetail";
import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getPokemonDetailApi} from '../apis/PokemonAPI';

function PokemonDetailPage() {
    const {id} = useParams();

    return (
        <div>
            <h1>포켓몬 상세</h1>
            <PokemonDetail id={id}/>
        </div>
    );
}

export default PokemonDetailPage;