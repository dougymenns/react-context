import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props)=>{
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
          <MovieContext.Provider value={[movies,setMovies]}>
              {props.children}
          </MovieContext.Provider>
      )
}