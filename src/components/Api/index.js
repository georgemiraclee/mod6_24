//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://imdb8.p.rapidapi.com/title'
})

export default Api