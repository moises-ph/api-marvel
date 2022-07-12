import React, { useEffect } from 'react'
import { useState } from 'react'
import './Char.css'
import Char_info from './Char_info'

function Characters() {
    let content = [];
    const [varLength, setVarLength] = useState({})
    const [characters, setCharacters] = useState([]);

    const url = (query) => {
        return `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1000&apikey=c1877a4b5d3693afc04219bd658fe78c&hash=39a54346f077173d691ac33efe20ae09&limit=40`;
    }

    const show = async (e) => {
        let url = `http://gateway.marvel.com/v1/public/characters?id=${e.target.value}&ts=1000&apikey=c1877a4b5d3693afc04219bd658fe78c&hash=39a54346f077173d691ac33efe20ae09&limit=40`
        let content = await  fetch(url).then(res => res.json()).then(data => {
            return data.data.results[0]
        }); 

        setCharacters(<Char_info content={content} />);
    }

    const buscar = async (e) => {
        if(e.target.value.length > 0) {
            setVarLength({
                width: `${(e.target.value.length * 10) + 200}px`
            })
            setCharacters([]);
        }
        else{
            setVarLength({
                width: `20%`
            })
        }
        setCharacters([]);
        let url_fecth = url(e.target.value);
        let data = await fetch(url_fecth).then(res => res.json()).then(data => data.data.results);
        
        content.push(
        data.map(character => {
            let description = character.description;
            character.name = character.name.toUpperCase();
            let image = `${character.thumbnail.path}/standard_amazing.${character.thumbnail.extension}`;
            return (<div id='char-card' key={character.id} className="char-card">
            <div className="char-card-body">
                <h3>{character.name}</h3>
                <div className="char-card-img">
                    <img src={image} alt={character.name}/>
                </div>
                <p>{description}</p>
                <button value={character.id} onClick={show}>Mas Información</button>
            </div>
        </div>)
        }))
        setCharacters([...content]);
    }

    useEffect(() => {
        buscar({target: {value: 'a'}});
    },[]);

    return (
        <div className='Characters'>
            <h2>Characters</h2>
            <div className='searchGroup'>
                <input style={varLength} typeof='text' className='search-input' id='search' onChange={buscar} placeholder='Ingrese una letra o un nombre'></input>
            </div>
            <div className='results'>
                {characters}
            </div>
            <div className='navegacion-cards'>
                <p>{'<<'}Página Anterior</p>
                <p>Siguiente Página {'>>'}</p>
            </div>
        </div>
    )
}

export default Characters