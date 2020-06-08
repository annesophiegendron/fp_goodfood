// WELCOME PAGE SEARCH BAR
export const handleSubmit = (event, searchText, setRecipes, setSearchText) => {
  event.preventDefault();
  fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchText}&number=20&apiKey=eff3d2c7c763473ca8a93a295b37cf51`)
    .then(res => res.json())
    .then(json => {
      setRecipes(json)
      sessionStorage.setItem("recipesArray",[])
      setSearchText("")
    })
    .catch(error => {
      console.log(error)
    })
}

// DETAILS PAGE
export const fetchData = async (recipeId, setError, setDetails, setLoading) => {
  const api_key = "eff3d2c7c763473ca8a93a295b37cf51"

  const result = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?includeInstruction=true&apiKey=${api_key}`)
  const json = await result.json()
  if (json.status_code === 34) {
    setError(true)
  } else {
    setDetails({ ...json })
    setLoading(false)
  }
}

