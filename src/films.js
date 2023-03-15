// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  const result =movies.filter(item => item.director===director);
    console.log("EXERCICE 2 ->", result);
    return result;
  
}

// Exercise 3: Calculate the average of the films of a given director.

function average(array){
  const averageNumber=Number((array.reduce( (acc, item) => Number(acc)+Number(item.score), 0) /array.length).toFixed(2));
  console.log ("mitja",averageNumber);
  return averageNumber;
}

function moviesAverageOfDirector(movies, director) {
  const movieDirector=getMoviesFromDirector(movies, director);
  const result=average(movieDirector);
  console.log("Exercici 3", result);
  return result;

  /* let r=0, p=0;
  const movieDirector=getMoviesFromDirector(movies, director);
  const result=movieDirector.reduce( (acc,item) => {
    
    console.log("score",item.score);
    console.log("acc",acc);
    acc=((Number(item.score)+Number(acc))/movieDirector.length).toFixed(2);
    console.log("acc2",acc);
     et llarg=movieDirector.length;
    console.log("llarg",llarg);
    r=(acc/llarg).toFixed(2);
    p=r.toFixed(2);
    console.log("r",r);
    console.log("p",p); 
    return acc;
  },0);

console.log("Exercici 3", result);
return result; */
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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
