import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Showcase from '../components/Showcase'

export default function Home() {
  const [input, setInput] = useState('')
  const [drinks, setDrinks] = useState([])

  const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'

  // const getDrinks = (e) => {
  //   e.preventDefault()
  //   const URL = input === '' ? baseURL + 'random.php' : baseURL + 'search.php?s=' + input
  //   axios.get(URL)
  //     .then(response => {
  //       setDrinks(response.data.drinks)
  //     }).catch(error => {
  //       alert(error)
  //     })
  // }

  const getDrinks = (e) => {
    e.preventDefault()
    const URL = input === '' ? baseURL + 'random.php' : baseURL + 'search.php?s=' + input
    axios.get(URL)
      .then(response => {
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
        console.log(drinks);
        // console.log(drinks[0].ingredients);
        // drinks[0].ingredients.forEach(element => {
        //   console.log(element);
        // });
      }).catch(error => {
        alert(error)
      })
  }

  return (
    <div>
      <form onSubmit={getDrinks} className="form-inline d-flex justify-content-center mb-3">
        <div className="input-group w-50">
          <input type="text" className="form-control outline-dark" placeholder="Search..." onChange={e => setInput(e.target.value)} />
          <button className="btn btn-outline-dark input-group-append"><FontAwesomeIcon icon={faSearch} className="px-3" /></button>
        </div>
      </form>
      <Showcase drinks={drinks} />
    </div>
  )
}
