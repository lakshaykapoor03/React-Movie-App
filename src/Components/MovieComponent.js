import React from 'react'
// import MovieInfoComponent from './Components/MovieInfoComponent';


function MovieComponent(props) {
    const {Title, Year, imdbID, Type, Poster} = props.movie;

  return (
    <div className='w-[300px] h-[430px] border-[2px] bg-[#0b214580] text-[white] text-center pt-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[white] duration-300 hover:text-[black]  ' onClick={()=>props.setSelectedMovie(imdbID)}>
        <img className="w-[280px] h-[360px] object-cover mx-auto transition duration-150 ease-out hover:ease-in " src={Poster}></img>
        <h2 className="mt-[10px] whitespace-nowrap text-ellipsis overflow-hidden">{Title}</h2>
        <div className="flex justify-around">
            <p>Year:{Year}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden">Type:{Type}</p>
        </div>

    </div>
  )
}

export default MovieComponent