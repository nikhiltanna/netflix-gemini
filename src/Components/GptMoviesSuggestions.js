import { useSelector } from "react-redux";
import MovieList from "./Movielist";

const GptMovieSuggestions = () => {
  const {  moviesnames,geminimovies } = useSelector((store) => store.gpt);

  if (!geminimovies) return null;
  console.log(geminimovies);
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {moviesnames.map((moviesName, index) => (
        <div key={index}>
          <MovieList  title={moviesName} movies={geminimovies[index]} />
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
