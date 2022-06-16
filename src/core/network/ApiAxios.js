import axios from "axios";

const api=axios.create({
    baseURL:'http://localhost:8080/api/v1',
    params:{
        api_key:'35b3d04cf2007c1a8ff2e6729bd5063b',
        language: 'es-ES'
    }
});

export default api;