import React from 'react'
// import MovieInfoComponent from './Components/MovieInfoComponent';


function MovieComponent(props) {
    const {Title, Year, imdbID, Type, Poster} = props.movie;

  return (
    <div className='w-[300px] h-[430px] border-[2px] text-center pt-[10px]' onClick={()=>props.setSelectedMovie(imdbID)}>
        <img className="w-[280px] h-[360px] object-cover mx-auto" src={Poster}></img>
        <h2 className="mt-[10px] whitespace-nowrap text-ellipsis overflow-hidden">{Title}</h2>
        <div className="flex justify-around">
            <p>Year:{Year}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden">Type:{Type}</p>
        </div>

    </div>
  )
}

export default MovieComponent