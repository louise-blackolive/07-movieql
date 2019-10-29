export let movies = [
  {
    id: "0",
    name: "Star Wars - The new one",
    score: 2
  },
  {
    id: "1",
    name: "Star Wars - The new one",
    score: 8
  },
  {
    id: "2",
    name: "The Godfather 1",
    score: 90
  },
  {
    id: "3",
    name: "Aladin",
    score: 89
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
