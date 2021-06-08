import axios from 'axios';

export const searchMovies = async searchQuery => {
    let movieData = {};
    await axios.get(`http://omdbapi.com/?s=${searchQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`).then((response)=> {
        movieData = response.data;
    }).then((error) => console.log(error));
    return movieData.Response === 'True' ? movieData.Search.slice(0,5) : [];
};
