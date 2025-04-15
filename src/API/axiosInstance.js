import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://adeelabbas2.nayatel.net:8000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;