import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
    const response = await axios.get('https://jsonmockserver.vercel.app/api/blogs');
    return response.data;
});