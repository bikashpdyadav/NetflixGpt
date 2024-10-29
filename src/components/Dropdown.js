import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieGenre from "../hooks/useMovieGenre";
import useMovieGenreId from "../hooks/useMovieGenreId";
import { getMovieByGenre, getMovieCurrentGenre } from "../utils/movieSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const movieGenre = useSelector((store) => store.movie.movieGenre);
  const movieGenreId = useSelector((store) => store.movie.movieGenreId);
  console.log(movieGenreId.genres?.[0].name, "movieGenreId");
  const [obj, setObj] = useState({});

  const movieList = movieGenre?.results?.filter((movie) =>
    movie.genre_ids.includes(obj.selectedGenreId)
  );

  useEffect(() => {
    dispatch(getMovieByGenre(movieList));
  }, [movieList]);
  const handleGenre = (e) => {
    console.log(e.target.value);
    let genreId = 0;
    for (let i = 0; i < movieGenreId?.genres?.length; i++) {
      if (e.target.value === movieGenreId?.genres[i]?.name) {
        genreId = movieGenreId?.genres[i]?.id;
      }
    }
    setObj((prev) => ({
      ...prev,
      selectedGenreId: genreId,
      selectedGenreName: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getMovieCurrentGenre(obj));
  }, [obj]);
  console.log(obj);
  return (
    <div className="-mt-14 text-black flex justify-end mr-10 items-center ">
      <select
        onChange={handleGenre}
        className=" w-44 rounded-xl bg-blue-700 text-white p-2 cursor-pointer"
      >
        {movieGenreId?.genres?.map((genre) => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
