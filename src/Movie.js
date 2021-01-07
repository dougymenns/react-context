import React, { useState } from "react";

const Movie = ({name,price}) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Porter",
      price: "$150",
      id: 1234,
    },
    {
      name: "Game of Thrones",
      price: "$1500",
      id: 2344,
    },
    {
      name: "Inception",
      price: "$130",
      id: 1232,
    },
  ]);
  return (
    <>
    <h3>{name}</h3>
    <p>{price}</p>
    </>
  );
};

export default Movie;
