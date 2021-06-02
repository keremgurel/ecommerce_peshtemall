import axios from 'axios';
const instance = axios.create({
    baseURL: "https://us-central1-ecommerce-site-a3cf6.cloudfunctions.net/api"  // The API (cloud function) URL
    // http://localhost:5001/ecommerce-site-a3cf6/us-central1/api"  
});

export default instance;