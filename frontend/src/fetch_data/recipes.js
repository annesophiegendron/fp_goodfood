import { API_KEY } from '../fetch_data/constants'

// WELCOME PAGE SEARCH BAR

export const handleSubmit = (event, searchText, setRecipes, setSearchText) => {
  event.preventDefault();
  fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchText}&number=10&apiKey=`+ API_KEY)
    .then(res => res.json())
    .then(json => {
      setRecipes(json)
      sessionStorage.setItem("recipesArray")
      setSearchText("")
    })
    .catch((error, errorInfo) => {
      console.log(error, errorInfo)
    })
}
 
// DETAILS PAGE

export const fetchData = async (recipeId, setError, setDetails, setLoading) => {
  const result = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?includeInstruction=true&apiKey=`+ API_KEY)
  const json = await result.json()
  if (json.status_code === 34) {
    setError(true)
  } else {
    setDetails({ ...json })
    setLoading(false)
  }
}

