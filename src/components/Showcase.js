import React from 'react'

export default function Showcase({ drinks }) {
  return (
    <div className="row d-flex justify-content-between">
      {drinks.map(drink => (
        <div className="card border-dark">
          <div class="card-header border-bottom border-dark text-center h5 bg-white">{drink.name}</div>
          <img src={drink.image} className="card-img-top rounded-0 border-bottom border-dark" alt="drink-img" />
          <div className="card-body">
            <h5 className="card-subtitle">Glass</h5>
            <p className="card-text">{drink.glass}</p>
            <ul>
            </ul>
            <h5 className="card-subtitle">Ingredients</h5>
            <ul>
              {/* {drink.ingredients.map(ele => (
                <li key={drink.id}>{ele.ingr}, {ele.measure}</li>
              ))} */}
            </ul>
            <h5 className="card-subtitle">Instructions</h5>
            <p className="card-text">{drink.instructions}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      ))}
    </div>
  )
}
