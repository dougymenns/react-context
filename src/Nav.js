import React, { useState, useContext } from "react";
import {MovieContext} from './MovieContext'
const Nav = () => {
 const [movies, setMovies] = useContext(MovieContext)
  return (
    <>
    <h3>Dougy Menns</h3>
    <p>List of Movies: {movies.length}</p>
    </>
  );
};

export default Nav;
