import axiosInstance from "./axiosInstance";

export const getCommodity = async () => {
    const accessToken = localStorage.getItem('access_token');
    try {
        const response = await axiosInstance.get('/Commodity/GetCommodities',{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data.response;
    } catch(error){
        throw new Error('Failed to fetch commodities');
    }
};