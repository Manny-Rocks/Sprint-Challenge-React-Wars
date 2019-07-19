import React from 'react';
import StarWars from './StarWars';




const StarWarsList = (props) => {
    console.log(props);
    return (
        <div className='container'>
            {props.starwarsChars.map((char) => {
                console.log(char)
                return <StarWars char={char} key={char.url} />
            })
            }
        </div>
    )
}


export default StarWarsList;