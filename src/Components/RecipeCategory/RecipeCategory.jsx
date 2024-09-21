import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './recipeCategory.css'
import { Link } from 'react-router-dom'

export default function RecipeCategory() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const [categories, setCategories] = useState(null)

    const fetchCategoryData = async () => {
        try {
            const response = await axios.get(URL)
            console.log(response.data.categories)
            setCategories(response.data.categories)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategoryData()
    }, [])
    return (
        <>
            <div className="category-title">
                <h1>Category</h1>
            </div>

            <div className='category-header'>

                {categories &&
                    categories.map(category => (
                        <Link key={category.idCategory} to={`/Category/${category.strCategory}`}>
                            <div key={category.idCategory} className="category-container">
                                <div className="category-card">
                                    <img src={category.strCategoryThumb} alt="" />
                                    <div className="category-text">
                                        <h2>{category.strCategory}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))

                }


            </div>
        </>

    )
}
