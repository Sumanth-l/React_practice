import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_API_KEY;

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export default function(){

  const [movie,setMovie]=useState<Movie[]>([]); 

  useEffect(()=>{
  getMovies();
  },[])

  async function getMovies(){
    try {
        const res=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
       { headers:{
            "content-type":"application/json",
            },
            method:"GET",
        }
        );
        if(res.ok){
            const data=await res.json()
            setMovie(data.results);
        }else{
            console.log("fetching movie is failed")
        }
    } catch (error) {
        console.error("Error while fetching movies",error)
    }
  }

    return(
        <div>
        {movie.map((m)=>{
            return(
                <div className="movie" key={m.id}>
                 <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title}/>
                 </div>
                 <div className="movie-details">
                    <h1>{m.title}</h1>
                 <p className="movie-overview">Plot : {m.overview}</p>
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
