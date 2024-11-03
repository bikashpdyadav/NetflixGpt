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
    <div className="lg:mb-0 mb-12">
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>

      <div className="flex flex-col items-center bg-gray-950 p-6 space-y-6 xs:flex-wrap">
        {/* Trailer and Movie Details Section */}
        <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-[90%] lg:w-[80%] p-6 bg-gray-900 rounded-lg shadow-lg">
          <iframe
            className="w-full md:w-2/3 aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${officialTrailer}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="flex flex-col p-4 w-full md:w-1/3 space-y-4 bg-gray-800 rounded-lg mt-4 md:mt-0">
            <div className="flex flex-col flex-wrap md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <img
                className="w-24 h-auto mx-auto rounded-lg shadow-md"
                src={`${IMAGES_URL}${movieDetailsId?.poster_path}`}
                alt={`${movieDetailsId?.original_title} Poster`}
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left py-4">
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {movieDetailsId?.original_title}
                  </h3>
                  <p className="text-gray-400 text-md opacity-70">
                    {movieDetailsId?.genres?.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 transition">
                  Watch Options
                </button>
              </div>
            </div>


            <hr className="border-gray-700 opacity-50 mt-4" />

            <div className="space-y-2">
              <h3 className="text-white text-lg font-semibold">
                Official Trailer
              </h3>
              <p className="text-gray-300 text-sm">
                {movieDetailsId?.overview}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Movie Information Section */}
        <div className="flex flex-col items-start w-full md:w-[90%] lg:w-[80%] bg-gray-900 p-6 rounded-lg space-y-4">
          <h2 className="text-yellow-600 text-2xl font-bold">
            Production Company:
          </h2>
          <p className="text-yellow-400 text-lg">
            {movieDetailsId?.production_companies
              ?.map((company) => company.name)
              .join(", ")}
          </p>
          <div className="flex space-x-4 overflow-x-auto">
            {movieDetailsId?.production_companies?.map(
              (company, index) =>
                company.logo_path && (
                  <img
                    key={index}
                    src={`${IMAGES_URL}${company.logo_path}`}
                    alt={`${company.name} Logo`}
                    className="w-16 h-auto"
                  />
                )
            )}
          </div>

          <h2 className="text-yellow-600 text-xl font-semibold">
            Genres:{" "}
            <span className="text-yellow-400">
              {movieDetailsId?.genres?.map((genre) => genre.name).join(", ")}
            </span>
          </h2>
          <p className="text-yellow-600">Runtime: {movieDetailsId?.runtime} mins</p>
          <p className="text-yellow-600">Release Date: {movieDetailsId?.release_date}</p>
          <p className="text-yellow-600">Budget: ${movieDetailsId?.budget?.toLocaleString()}</p>
          <p className="text-yellow-600">Revenue: ${movieDetailsId?.revenue?.toLocaleString()}</p>

          <h3 className="text-yellow-600 font-bold">Available in:</h3>
          <div className="flex flex-wrap space-x-2">
            {movieDetailsId?.spoken_languages?.map((lang) => (
              <span key={lang.iso_639_1} className="text-yellow-400">
                {lang.english_name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
