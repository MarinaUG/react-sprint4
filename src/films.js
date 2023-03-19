// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  const result = movies.filter(item => item.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;

}

// Exercise 3: Calculate the average of the films of a given director.

function average(array) {
  const averageNumber = Number((array.reduce((acc, item) => Number(acc) + Number(item.score), 0) / array.length).toFixed(2));
  console.log("mitjana", averageNumber);
  return averageNumber;
}

function moviesAverageOfDirector(movies, director) {
  const movieDirector = getMoviesFromDirector(movies, director);
  const result = average(movieDirector);
  console.log("Exercici 3", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const movie = movies.map(item => item.title);
  movie.sort();
  if (movie.length > 20) {
    movie.length = 20;
  }
  console.log("Exercici 4", movie);
  return movie;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMovie = [...movies].sort((item1, item2) => {
   if (item1.year > item2.year) {
      return 1;
    }
    if (item1.year < item2.year) {
      return -1;
    }
    if (item1.title.toLowerCase() > item2.title.toLowerCase()) {
      return 1;
    }
    if (item1.title.toLowerCase() < item2.title.toLowerCase()) {
      return -1;
    }
  });
  console.log("Exercici 5", sortedMovie);
  return sortedMovie;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,category) {

  const movieCat=movies.filter(item => item.genre.includes(category) && typeof item.score==="number");
  const movieCatAve=average(movieCat);
  console.log("Exercici 6", movieCatAve);
  return movieCatAve;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

let minuts=0;
const moviesDuration = movies.map(item => {

  if (item.duration.split(" ").length == 2){
    minuts=parseInt(item.duration.split(" ")[0])*60 +parseInt(item.duration.split(" ")[1]);
   }
   else{ minuts=parseInt(item.duration[0])*60; }
   return {
    ...item,
    duration: minuts
  }
});
console.log("Exercici 7", moviesDuration);
return moviesDuration;
} 



// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}