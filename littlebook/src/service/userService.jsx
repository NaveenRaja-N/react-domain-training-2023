import axios from "axios";

export const retrieveUsers = async () => {
    const response = await axios.get('https://jsonmockserver.vercel.app/api/users');
    return response.data;
};