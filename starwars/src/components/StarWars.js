import React from 'react';

const cardStyle = {
border: '3px solid #69e750',
backgroundColor: 'lightgray', 
width: '400px',
height: 'auto',
margin: '15px',
borderRadius: '10px',
fontFamily: 'Roboto Mono',
boxShadow: '-1px 27px 38px -15px rgba(0,0,0,0.75)',

}


const colorHead = {
    color:'red',
    }

const color1 = {
        color:'blue',
        }


const color2 = {
            color:'orange',
            }
            


const StarWars = (props) => {
    console.log(props);
    return(
    <div  style = {cardStyle} >

        <h1 style={colorHead}>{props.char.name}</h1>
        <h4 style={color1}>Gender:</h4>
        <p>{props.char.gender}</p>
        <h4 style={color2}>Height:</h4>
        <p>{props.char.height}</p>
        <h4 style={color1}>Mass:</h4>
        <p>{props.char.mass}</p>
        <h4 style={color2}>Skin Color:</h4>
        <p>{props.char.skin_color}</p>
        <h4 style={color1}>Eye Color:</h4>
        <p>{props.char.eye_color}</p>

    </div>

    );
}


export default StarWars;