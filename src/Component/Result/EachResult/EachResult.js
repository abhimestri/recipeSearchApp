import React from 'react'
import './EachResult.css'

const eachRecepie = (props) => {
    // const data = props.ingredients.map(eachIngredient => {
    //     return <li key={Math.random() * Math.random()}> - {eachIngredient}</li>
    // })
    return (
        <div className="eachBox" onClick={props.clicked} >
            <p className="TitleBox"> Name : {props.recipeName}</p>
            <img src={props.image} alt={props.recipeName} />
            {/* <ul>
                {data}
            </ul> */}
            <p className="calories"> Calories :  {props.calories.toFixed(2)}kcal</p>
        </div>
    )
}

export default eachRecepie