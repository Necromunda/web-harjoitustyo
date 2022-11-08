import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Showcase from '../components/Showcase'

export default function Home() {
  const [input, setInput] = useState('')
  const [drinks, setDrinks] = useState([])
  const [ingredientList, setIngredientList] = useState([])

  const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'
  const ingrURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

  // useEffect(() => {
  //   let arr = []
  //   axios.get(ingrURL)
  //   .then(response => {
  //     response.data.drinks.forEach(data => {
  //       const ingredients = Object.keys(data)
  //         .filter(key => key.match(/ingredient/i))
  //         .filter(key => !!data[key] || data[key] === ' ')
  //         .map(key => data[key].trim())
  //         arr.push(ingredients[0])
  //       })
  //       setIngredientList(arr)
  //       console.log(ingredientList);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }, [])

  const getDrinks = (e) => {
    e.preventDefault()
    const URL = input === '' ? baseURL + 'random.php' : baseURL + 'search.php?s=' + input
    axios.get(URL)
      .then(response => {
        console.log(response);
        if (response.data.drinks != null) {
          let arr = []
  
          // console.log(response.data.drinks);
          response.data.drinks.forEach(data => {
            const drinks = Object.keys(data)
              .filter(key => key.match(/ingredient/i))
              .filter(key => !!data[key] || data[key] === ' ')
              .map(key => data[key].trim())
  
            const measures = Object.keys(data)
              .filter(key => key.match(/measure/i))
              .filter(key => !!data[key] || data[key] === ' ')
              .map(key => data[key].trim())
  
            const ingredients = drinks.map((drink, index) => {
              return { ingr: drinks[index], measure: measures[index] }
            })
  
            const cocktail = {
              image: data.strDrinkThumb,
              name: data.strDrink,
              instructions: data.strInstructions,
              glass: data.strGlass,
              alcoholic: data.strAlcoholic,
              category: data.strCategory,
              id: data.idDrink,
              ingredients
            }
            arr.push(cocktail)
          });
          setDrinks(arr)
        } else { alert("No matches") }
      }).catch(error => {
        alert(error)
      })
  }

  return (
    <div>
      <form onSubmit={getDrinks} className="form-inline d-flex justify-content-center mb-3">
        <div className="input-group w-50">
          {/* <button type="button" className="btn btn-outline-dark input-group-prepend">Filters</button> */}
          {/* <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" checked/>
          <label class="btn btn-outline-dark input-group-prepend" for="option1">Alcoholic</label>
          <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off"/>
          <label class="btn btn-outline-dark input-group-prepend" for="option2">Non-alcoholic</label> */}
          <input type="text" className="form-control outline-dark" placeholder="Search..." onChange={e => setInput(e.target.value)} />
          <button className="btn btn-outline-dark input-group-append"><FontAwesomeIcon icon={faSearch} className="px-3" /></button>
        </div>
      </form>
      <Showcase drinks={drinks} />
    </div>
  )
}
