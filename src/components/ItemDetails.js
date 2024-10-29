import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieIdDetails } from "../utils/searchSlice";
import useMovieDetails from "../hooks/useMovieDetails";
import Header from "./Header";
import useMovieDetailsById from "../hooks/useMovieDetailsById";
import { IMAGES_URL } from "../utils/constants";
import useMovieCastDetails from "../hooks/useMovieCastDetails";
import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((store) => store.search?.movieDetails);
  const movieDetailsId = useSelector((store) => store.search.movieDetailsById);
  useMovieDetails();
  useMovieDetailsById();

  const { id } = useParams();
  useEffect(() => {
    dispatch(movieIdDetails(id));
  }, [id]);

  // let trailer = movieList?.results?.filter(
  //   (movieTrailer) =>
  //     movieTrailer.type === "Trailer" &&
  //     movieTrailer.name === "Official Trailer"
  // );
  // console.log(trailer);

  // if (trailer?.length == 0) return <h1>No more Details</h1>;
  const officialTrailer = movieList?.results?.[0]?.key;
  if (!officialTrailer) return <h1>No more Details</h1>;
  return (
    <div className="w-full ">
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      <div className="justify-center items-center flex flex-col bg-gray-950 xs:flex-wrap ">
        <div className="flex flex-row p-8 m-2 gap-2 shadow-2xl w-[98%] ml-14  xs:flex-wrap ">
          <iframe
            className="w-full aspect-video "
            src={"https://www.youtube.com/embed/" + officialTrailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className=" bg-gray-900 xs:p-0 lg:p-4 xs:w-full lg:w-1/2">
            <div className="flex flex-row flex-wrap">
              <img
                className="xs:w-full lg:w-1/4"
                src={IMAGES_URL + movieDetailsId?.poster_path}
                alt={movieDetailsId?.original_title + "image"}
              />
              <div className="ml-3">
                <h3 className="text-white text-xl">
                  {movieDetailsId?.original_title}
                </h3>
                <h3 className=" text-gray-400 text-md opacity-50">
                  {movieDetailsId?.genres
                    ?.map((genre) => genre.name)
                    .join(", ")}
                </h3>
                <button className="bg-gray-700 p-6 text-blue-400 font-bold mt-4">
                  Watch Options
                </button>
              </div>
            </div>
            <hr className="mt-4 opacity-20" />
            <div>
              <h3 className="text-white font-bold text-2xl mt-4">
                Official Trailer
              </h3>
              <p className="text-white text-sm mt-2">
                {movieDetailsId?.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-900 w-[90%] h-1/2 ml-8 rounded-3xl">
          <div className="mb-2">
            <h1 className="text-yellow-700 font-bold text-3xl mb-2">
              Production Company:{" "}
              {movieDetailsId?.production_companies
                ?.map((company) => company.name)
                .join(", ")}
            </h1>
            <div className="w-[20%] h-20 gap-10 flex flex-row mt-4">
              {movieDetailsId?.production_companies?.map((company, index) => (
                <img key={index} src={IMAGES_URL + company.logo_path} alt="" />
              ))}
            </div>
          </div>

          <h1 className=" text-yellow-700 font-bold text-2xl">
            Genres:{" "}
            {movieDetailsId?.genres?.map((genre) => genre.name).join(", ")}
          </h1>
          <h1 className="text-yellow-700">
            Runtime: {movieDetailsId?.runtime}
          </h1>

          <h1 className="text-yellow-700">
            Release Date: {movieDetailsId?.release_date}
          </h1>
          <h1 className="text-yellow-700">Budget: {movieDetailsId?.budget}</h1>
          <h1 className="text-yellow-700">
            Revenue: {movieDetailsId?.revenue}
          </h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-yellow-700">Available in:</h1>
            {movieDetailsId?.spoken_languages?.map((lang) => (
              <h2 className="text-yellow-700 flex flex-row">
                {" "}
                {lang.english_name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
