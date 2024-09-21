import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Home({searchData}) {
  let URL = "https://www.themealdb.com/api/json/v1/1/random.php"
  let searchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  
  const [recipeData, setRecipeData] = useState(null)
  const [searchURLData , setSearchURLData] = useState(null)
  const [ loading , setLoading ] = useState(true)

  const fetchRecipeData = async () => {
    setLoading(true) // Start loading
    try {
      const responses = await Promise.all(
        Array.from({ length : 16}).map(() => axios.get(URL))
      );
      console.log("API Responses:", responses);
      const allMeals = responses.map(response => {
        console.log("Meal from response:", response.data.meals[0]); // Add this line
        return response.data.meals[0];
      });
      
      setRecipeData(allMeals)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false) // Stop loading after data is fetched
    }
  }

  const fetchSearchData = async () => {
    try {
      const response = await axios.get(searchURL + searchData)
      setSearchURLData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    } 
  }
  useEffect(() => {
    fetchRecipeData();
  },[])
  useEffect(() => {
    
    if (searchData) {
      fetchSearchData();
    } else {
      setSearchURLData(null); // Ensure search results are cleared if searchData is empty
    }
  }, [searchData]);
  
  const displayData = searchURLData ? searchURLData.meals : recipeData;
  
  return (

    <>
    <h1 className='home-header'>Recipes</h1>
    <div className="home-container">
    { loading ? (
      <>
      <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p> 
      </div>
      </>
      
    ) : displayData ? (
      displayData.map(recipe => (
        <div key={recipe.idMeal} className="home-card">
          <Link to={`/recipe/${recipe.idMeal}`}>
            <img src={ recipe.strMealThumb} alt={ recipe.strMealThumb} />
          </Link>
          
          <div className="home-items">
            <div className="home-title">
              <h2>{recipe.strMeal}</h2>
            </div>
            <p>Category:  <span> { recipe.strCategory }</span></p>
            <button>
              <a href={ recipe.strYoutube } target="_blank" rel="noopener noreferrer">Watch Video</a>
            </button>
          </div>
        </div>
      ))
    ) : (
      <p>No Recipes Found!</p>
    )}
  </div> 
  </>
  )
}
