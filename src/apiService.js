import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false, // This is the default
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getProducts() {
        return apiClient.get('/productList');
    },
    getProductwithId(id) {
        console.log("id inside api", id)
        return apiClient.get(`/productList/${id}`); 
    }
};