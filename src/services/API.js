export const fetchByIngredient = async (ingredient, page) => {
  let URL;
  if (page === 'food') {
    URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  } else {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchByName = async (name, page) => {
  let URL;
  if (page === 'food') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  } else URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchByFirstLetter = async (firstLetter, page) => {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    let URL;
    if (page === 'food') {
      URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    } else URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const request = await fetch(URL);
    const response = await request.json();
    return response;
  }
  return [];
};

export const emptyFetch = async (page) => {
  let URL;
  if (page === 'food') {
    URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  } else {
    URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchCategories = async (page) => {
  let URL;
  if (page === 'food') {
    URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  } else {
    URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const getCategoryRecipes = async (page, category) => {
  let URL;
  if (page === 'food') {
    URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  } else {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchByAllIngredient = async (page) => {
  let URL;
  if (page === '/explore/foods/ingredients') {
    URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  } else {
    URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchRecipesInfo = async (id, page) => {
  let URL;
  if (page === 'food') {
    URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  } else {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchAllNationalities = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchByNationalities = async (nationality) => {
  let URL;
  if (nationality === 'All') {
    URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  } else {
    URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const fetchRandom = async (page) => {
  let URL;
  if (page === '/explore/foods') {
    URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  } else {
    URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  }
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};
