import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './filteredCategory.css'

export default function FilteredCategory() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
    const { id } = useParams()
    const [recipeCategory, setRecipeCategory] = useState(null)

    const fetchCategoryData = async () => {
        try {
            const response = await axios.get(URL + id)
            setRecipeCategory(response.data.meals)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategoryData()
    }, [id])

    return (
        <>
            <div className="filtered-title">
                <h1>{id}</h1>
            </div>
            <div className='filtered-header'>

                {recipeCategory && (
                    recipeCategory.map(recipe => (

                        <Link to={`/recipe/${recipe.idMeal}`}>
                            <div key={recipe.idMeal} className="filtered-container">
                                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                                <h1>{recipe.strMeal}</h1>
                            </div>
                        </Link>

                    ))
                )}
            </div>
        </>

    )
}
