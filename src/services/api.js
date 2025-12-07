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
    };

    try {
        const response = await axios.get(`${baseURL}/leave-balances/balance`, options);
        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    
}

export const  makeRequest = async (userData) => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }

    const requestBody = {
        'leaveType': userData.leaveType,
        'startDate': userData.startDate,
        'endDate': userData.endDate,
        'reason': userData.reason,
        'doc': null
    }
   

    try {
        const response = await axios.post(`${baseURL}/leave-request/leave`, requestBody, {headers: headers});
        return (response);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getRequests = async () => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }

    try {
        const response = await axios.get(`${baseURL}/leave-request/leave`, {headers: headers});
        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}