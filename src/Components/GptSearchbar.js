import React, { useRef } from 'react';
import { supported_languages,geminiapi_key, api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageconstants';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addgeminimovies,addmovienames} from '../utils/gptslice';

const GptSearchbar = () => {
    const searchtext=useRef(null);
    const langkey=useSelector((store)=>store.config.userlang);
    const dispatch=useDispatch();

    const searchtmdbmovie= async (movie )=>{
        const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', api_options);
        const json = await data.json();
        return json.results;
    }

    const handleGptsearch= async()=>{
        console.log(searchtext.current.value);

        // const gptresults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: 'Say this is a test' }],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(gptresults);


        const genAI = new GoogleGenerativeAI(geminiapi_key);
        const safetySettings  = [
          {
              "category": "HARM_CATEGORY_DANGEROUS",
              "threshold": "BLOCK_NONE",
          },
          {
              "category": "HARM_CATEGORY_HARASSMENT",
              "threshold": "BLOCK_NONE",
          },
          {
              "category": "HARM_CATEGORY_HATE_SPEECH",
              "threshold": "BLOCK_NONE",
          },
          {
              "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              "threshold": "BLOCK_NONE",
          },
          {
              "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
              "threshold": "BLOCK_NONE",
          },
      ]
      const model = genAI.getGenerativeModel({ model: "gemini-pro"},safetySettings );
        const prompt =" list  movies that belong to following  genre "+searchtext.current.value+" return results to me separated by commas Example movie, movie, movie...."
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const sepmovies=text.split(",")
        const geminimovies=sepmovies.map((movie)=>(searchtmdbmovie(movie)))
        const tmdbResults=await Promise.all(geminimovies);
        console.log(tmdbResults);
        //const tmdbResults1=tmdbResults.flatMap((subArray) => subArray);
        dispatch(addgeminimovies(tmdbResults));
        dispatch(addmovienames(sepmovies));

        
    }

  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" className="p-4 m-4 col-span-9  rounded-lg" placeholder={lang[langkey].gptSearchPlaceholder} ref={searchtext}/>
        <button type="submit" className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptsearch}>{lang[langkey].search}</button>
      </form>
    </div>
  );
}

export default GptSearchbar;
