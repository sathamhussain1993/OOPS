class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
  
  // Creating an instance of the Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Testing the getPG method
  const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
  ];
  
  const pgMovies = getPG(movies);
  console.log(pgMovies);
  