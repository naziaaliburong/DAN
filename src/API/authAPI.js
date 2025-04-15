import axiosInstance from "../API/axiosInstance.js";

export const sendOTP = async (otpData) => {
    try{
        const response = await axiosInstance.post('/Auth/SendOtp', otpData);
        return response.data.response.response;
    } catch (error) {
        throw new Error('Failed to send OTP ❌');
    }
};
export const authenticateUser = async (authData) => {
    try{
        const response = await axiosInstance.post('/Auth/AuthenticateMobileUser', authData);
        return response.data.response.access;
    } catch (error){
        throw new Error('Failed to authenticate user');
    }
};