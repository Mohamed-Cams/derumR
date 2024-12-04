
export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};


export const isAuthenticated = () => {
    const token = getToken();
    return !!token;
};


export const getAuthHeader = () => {
    const token = getToken();
    if (token) {
        return { Authorization: `Bearer ${token}` };
    }
    return {};
};