import axios from 'axios';
import React, {useState} from'react';
import ReactDOM from'react-dom';
import './App.css';
import MovieComponent from './Components/MovieComponent';
import MovieInfoComponent from './Components/MovieInfoComponent';

const APIKEY="6be39682";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const[timeoutId, setTimeoutId] = useState();
  const[movieList, setMovieList] = useState([]);
  const[selectedMovie, setSelectedMovie] = useState();

  const fetchData= async(searchString)=>{
    const response= await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${APIKEY}`)
    console.log(response)
   setMovieList(response.data.Search);
  }
  const onTextChange=(event)=>{
    clearTimeout(timeoutId);
setSearchQuery(event.target.value)
const timeout=setTimeout(()=>fetchData(event.target.value),500)
setTimeoutId(timeout)
  };

  return (
    <>
  <div className="text-[40px] bg-[black] flex flex-wrap justify-between py-[20px] items-center px-[2%]">
    <div className="flex">
      <img className="w-[8%]" src="https://raw.githubusercontent.com/ayushkul/react-movie-app/cc32c62558a8d0ee01f7db2b7b28589bf8dfbf89/public/react-movie-app/movie-icon.svg"></img>
      <h2 className="text-white">React Movie App</h2>
    </div>
    <div className="w-[800px] h-[40px] bg-white rounded-[20px] flex items-center">
    <i className="fa-solid fa-magnifying-glass text-[20px] mx-5"></i>
      <input className="w-[700px] h-[30px] outline-0 border-0 text-[20px]"
       type="text" 
       placeholder="Search your movie..."
       onChange={onTextChange} 
       value={searchQuery}></input>
    </div>
  </div>

{/* Hero section */}

{selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}/>}
  <div className="flex flex-wrap justify-evenly mt-[30px] gap-[20px] cursor-pointer">
{movieList?.length?movieList.map((movie,index)=><MovieComponent movie={movie} key={index} setSelectedMovie={setSelectedMovie}/>):"No Movie Search" }

  </div>
  </>
  );
}

export default App;
