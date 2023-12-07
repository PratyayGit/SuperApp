import React, { useEffect, useState } from 'react'
import style from './MovieCard.module.css'
const MovieCard=()=> {
    const [movieDetails, setMovieDetails] = useState([]);
    const apiKey = '14b22c633383174429d2419cdef3e3c7';
    const baseUrl = 'https://api.themoviedb.org/3';
  
    // Function to discover and collect movie details by genre
    const discoverAndCollectMoviesByGenre = async (genreId, numMovies) => {
      const endpoint = '/discover/movie';
      const url = `${baseUrl}${endpoint}?api_key=${apiKey}&with_genres=${genreId}`;
  
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        const searchData = await response.json();
  
        // Collect details for a limited number of movies
        const details = [];
        for (let i = 0; i < Math.min(numMovies, searchData.results.length); i++) {
          const movieId = searchData.results[i].id;
          const movieDetails = await collectMovieDetails(movieId);
          details.push(movieDetails);
        }
  
        return { category: getCategoryName(genreId), movies: details };
  
      } catch (error) {
        console.error(error.message);
        return null;
      }
    };
  
    // Function to get and collect movie details by ID
    const collectMovieDetails = async (movieId) => {
      const imageEndpoint = `/movie/${movieId}/images`;
      const imageUrl = `${baseUrl}${imageEndpoint}?api_key=${apiKey}`;
  
      try {
        const imageResponse = await fetch(imageUrl);
  
        if (!imageResponse.ok) {
          throw new Error(`Error: ${imageResponse.status}`);
        }
  
        const imageData = await imageResponse.json();
  
        if (imageData.backdrops.length > 0) {
          const firstImage = imageData.backdrops[0].file_path;
          const fullImageUrl = `https://image.tmdb.org/t/p/original${firstImage}`;
  
          return {
            movieId,
            imageUrl: fullImageUrl
          };
        } else {
          console.log(`No images available for movie with ID ${movieId}`);
          return null;
        }
  
      } catch (error) {
        console.error(error.message);
        return null;
      }
    };
  
    // Function to get category name from genre ID
    const getCategoryName = (genreId) => {
      switch (genreId) {
        case 28:
          return 'Action';
        case 18:
          return 'Drama';
        case 10749:
          return 'Romance';
        case 53:
          return 'Thriller';
        case 37:
          return 'Western';
        case 27:
          return 'Horror';
        case 14:
          return 'Fantasy';
        case 10402:
          return 'Music';
        case 878:
          return 'Fiction';
        default:
          return '';
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const numMoviesToCollect = 4;
        const genresToFetch = [28, 18, 10749, 53, 37, 27, 14, 10402, 878];
        const results = await Promise.all(
          genresToFetch.map((genreId) => discoverAndCollectMoviesByGenre(genreId, numMoviesToCollect))
        );
        setMovieDetails(results.filter(Boolean));
      };
  
      fetchData();
    }, []); // Empty dependency array to run the effect only once
  
    return (
      <div>
        <div className={style.header}>
            <h1>Super app</h1>
            <h2>Entertainment according to your choice</h2>   
        </div>
        <div className={style.movile_list}>
            {movieDetails.map((genreMovies) => (
              <div key={genreMovies.category} >
                <h2 className={style.category_title}>{genreMovies.category}</h2>
                <div style={{display:"flex", marginLeft:"2vw"}}>
                  {genreMovies.movies.map((movie) => (
                    <div key={movie.movieId} style={{display:"flex"}}>
                      <img src={movie.imageUrl} alt={`Movie Image - ${movie.movieId}`} style={{ width: '400px',height:"250px",marginLeft:"3vw",marginBottom:"1vh" }} />
                    </div>
               ))}
                </div>
              </div>
         ))}
        </div>
      </div>
    );
}

export default MovieCard