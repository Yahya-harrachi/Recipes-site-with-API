import axios from 'axios'
import './recipeDetail.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function RecipeDetail() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
    const { id } = useParams(); // get the id from the URL
    const [recipeData, setRecipeData] = useState()

    const fetchRecipeData = async () => {
        try {
            const response = await axios.get(URL + id)
            setRecipeData(response.data.meals[0])
        } catch (error) {
            console.log(error)
        }
    }

    const getIngredients = () => {
        let ingredients = []

        for ( let i = 0 ; i <= 20 ; i++ ){
            const ingredient = recipeData[`strIngredient${i}`]
            const mesure = recipeData[`strMeasure${i}`]

            if ( ingredient ){
                // checking if the ingredient is not null
                ingredients.push(`${mesure} of ${ingredient}`)
            }
        }
        return ingredients
    }
    useEffect(() => {
        fetchRecipeData()
    }, [id])
    return (
        <>
            { recipeData ? (
             <div key={recipeData.idMeal} className='recipe-header'>
                    <div className="recipe-container">
                        <img src={recipeData.strMealThumb} alt="" />
                        <div className="recipe-info">
                            <h1>Hello, I'm {recipeData.strMeal}</h1>
                            <h3>Want to cook me ? Here is how !</h3>
                            <p>{recipeData.strInstructions}</p>
                            <h3>Ingredients :</h3>
                            <ul>
                                {getIngredients().map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>
                </div>   
            ) : (
                <p>Something went Wrong !</p>
            )
                
            }

        </>
    )
}
