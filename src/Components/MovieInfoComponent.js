import axios from "axios";
import { useEffect, useState } from "react";

const APIKEY = "6be39682";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  

  const addToListHandler = async() => {
    await props.setAddToList([...props.addToList, movieInfo])
    alert("Added to favourites")
    
  }
  // console.log(addToList)

  const { selectedMovie, setSelectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${APIKEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="flex justify-between m-[20px] border-b-[3px]">
      {movieInfo ? (
        <>
          <div className="flex m-[20px]">
            <img
              className="w-[200px] h-[300px] object-cover"
              src={movieInfo?.Poster}
              alt="movie info"
            />
            <span className="leading-[35px] ml-[2%]">
              <h1 className="text-[25px]">Movie:{movieInfo?.Title} </h1>
              <h3>
                IMDB Rating:
                <span className="opacity-50"> {movieInfo?.imdbRating}</span>{" "}
              </h3>
              <h3>
                Year:<span className="opacity-50"> {movieInfo?.Year}</span>{" "}
              </h3>
              <h3>
                Language:
                <span className="opacity-50"> {movieInfo?.Language}</span>{" "}
              </h3>
              <h3>
                Released:
                <span className="opacity-50"> {movieInfo?.Released}</span>{" "}
              </h3>
              <h3>
                Runtime:
                <span className="opacity-50"> {movieInfo?.Runtime}</span>{" "}
              </h3>
              <h3>
                Director:
                <span className="opacity-50"> {movieInfo?.Director}</span>{" "}
              </h3>
              <h3>
                Plot:<span className="opacity-50"> {movieInfo?.Plot}</span>{" "}
              </h3>
            </span>
          </div>
          <div className="flex">
            <div onClick={()=>addToListHandler()}>
            <i className="fa-solid fa-plus text-[30px] bg-[#ffd51e] pt-[4px] h-[40px] w-[40px] mr-[10px] rounded-[50%] text-center text-black cursor-pointer"></i>
            </div>
          <div
            onClick={() => setSelectedMovie()}
            className="text-[30px] bg-[#4d4d4d] h-[40px] w-[40px] rounded-[50%] text-center text-white cursor-pointer"
          >
            X
          </div>
          </div>
        </>
      ) : ("Loading..."
        
      )}
    </div>
  );
};

export default MovieInfoComponent;
