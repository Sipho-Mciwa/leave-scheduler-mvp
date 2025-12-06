import axios from "axios";

const baseURL = 'http://localhost:3001';

export const login = async (userData) => {
    const options = {
        "email": userData.email,
        "password": userData.password
    };

    try {
        const response = await axios.post(`${baseURL}/auth/login`, options);
        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getBalance = async () => {
    const token = localStorage.getItem('token');
    if (!token) return

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axios.get(`${baseURL}/leave-balances/balance`, options);
        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    
}