import axios from "axios";

const baseURL = 'http://localhost:3001';

export const login = async (userData) => {

    const headers = {
        'Content-Type': 'application/json',
    }

    const options = {
        "email": userData.email,
        "password": userData.password
    };

    try {
        const response = await axios.post(`${baseURL}/auth/login`, options, {headers});
        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getBalance = async () => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        'authorization': `Bearer ${token}`
    };

    try {
        const response = await axios.get(`${baseURL}/leave-balances/balance`, {headers});
        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    
}

export const  makeRequest = async (userData) => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    const requestBody = {
        'leaveType': userData.leaveType,
        'startDate': userData.startDate,
        'endDate': userData.endDate,
        'reason': userData.reason,
        'doc': null
    }
   

    try {
        const response = await axios.post(`${baseURL}/leave-request/leave`, requestBody, {headers});
        return (response);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const cancelRequest = async (reqId) => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await axios.delete(`${baseURL}/leave-request/leave/${reqId}`, {headers})
        return (response);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getRequests = async () => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.get(`${baseURL}/leave-request/leave`, {headers});
        if (response.data.message) return null;

        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getPendingRequests = async () => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        accept: 'application/json',
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.get(`${baseURL}/leave-request/pending-leaves`, {headers});
        if (response.data.message) return null;

        return (response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const approveRequest = async (reqId, comment) => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.post(`${baseURL}/leave-approval/leave/${reqId}/approve`, comment, { headers });
        return (response);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const rejectRequest = async (reqId, comment) => {
    const token = localStorage.getItem('token');
    if (!token) return

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    try {
        const response = await axios.post(`${baseURL}/leave-approval/leave/${reqId}/reject`, comment, {headers});
        return (response);
    } catch (error) {
        console.error('Error:', error);
    }
}