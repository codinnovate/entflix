const key = '185885ed2649f9233b015397e10d6db4';

// const myapi = [`    
// `]
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestVideo: `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${key}&language=en-US`,
}

export default requests