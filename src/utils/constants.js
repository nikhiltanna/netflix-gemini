export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const avatar="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp";


export const api_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNjZmUyZDAyYmNmMzc4NDkzMzg4NDNiNDA0MWE5ZiIsInN1YiI6IjY2MDA0Mjk0MGMxMjU1MDE3ZTBmYWViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-vONBF3uGLJwD_zgcT6hnREBgdSbhOz499Hoo395Yc'
    }
  };

  export const image_url="https://image.tmdb.org/t/p/w300/";

  export const supported_languages = [
    {identifier: 'en',name: 'English'},
    {identifier: 'hindi',name: 'Hindi'},
    {identifier: 'spanish',name: 'Spansh'},
  ]

  export const openai_key=process.env.REACT_APP_openai_key
  export const geminiapi_key=process.env.REACT_APP_geminiapi_key