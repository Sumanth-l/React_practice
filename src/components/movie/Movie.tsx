import React from "react";
import '../../App.css'

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

type Props = {
  movie: MovieType[];
};


export default function Movie({ movie }: Props){






    return(
        <div className="movie-list">
        {movie?.map((m)=>{
            return(
                <div className="movie" key={m.id}>
                    <div className="image-container">
                      <img
  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
  alt={m.title}
/>  
                    </div>
                    <div className="movie-details"> 
                     <h1 className="movie-title">{m.title}</h1>
              <p className="movie-overview">{m.overview}</p>
              <p className="movie-release-date">
                Release Date: {m.release_date}
              </p>
              <p className="movie-rating">Rating: {m.vote_average}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}