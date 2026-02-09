import { useState } from "react"
import DefualtList from "./DefualtList";
import Movie from "./Movie";

const API_KEY=import.meta.env.VITE_API_KEY;




export default function SearchQuery(){

    const[movie,setMovie]=useState([]);
    const[search,setSearch]=useState("");
    const[error,setError]=useState("");


    async function Search(query:string){
     try {
        // const res=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=${query}`)
         const res = await fetch(
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
);

        if(res.ok){
            const data=await res.json()
            setMovie(data.results);
            setError("")
        }else{
            setError("an error ocurred while fetching movies")
            setMovie([]);
        }
     } catch (error) {
       setError("an error ocurred while fetching movies")
       setMovie([]);
     }
    }

   function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    const query=e.target.value;
    setSearch(query);
    if(query.trim()!==""){
      Search(query);

    }else{
        setMovie([])
        setError("")
    }

    }

 return(

    <div>
        <form action="" className="form">
        <h1>Movie App</h1>
        <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        />
        </form>
{error && <p>{error}</p>}

{search ? <Movie movie={movie} /> : <DefualtList/>}
    </div>
 )
}