import React, {Component} from 'react';
const POKI_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        const imgSrc = `${POKI_API}${this.props.id}.png`
        return (
            <div>
                <h1>Pokecard!!</h1>
            </div>
        );
    }
}

export default Pokecard;
