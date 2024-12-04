import { useState } from 'react';
import axios from 'axios';

export const useAxiosPost = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const executePost = async (url, postData, config = {}) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(url, postData, config);
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err.response?.data || err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        error,
        loading,
        executePost
    };
};

