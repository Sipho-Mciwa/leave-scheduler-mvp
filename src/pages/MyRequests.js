import { Typography } from "@mui/material";
import DetailedEvent from "../components/detailedEvent";
import { getRequests } from "../services/api";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import { data } from "react-router-dom";

export default function MyRequests() {
    const [requests, setRequests] = useState(null)
        
    useEffect(() => {
        const handleOnLoad = async () => {
            try {
                const requestData = await getRequests();
                setRequests(requestData);
            } catch (error) {
                console.error(error.message);
            }
        };

        handleOnLoad();
    }, [requests]);

    return (
    <div>
        <div>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>My Leave Requests</Typography>
            <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', color: 'gray'}}>Track and manage your leave applications</p>
        </div>
        <div className="searchBar">
            <input className="filter-search" placeholder="Search by leave type or reason..."></input>
            <button className="filter-btn">Filters</button>
        </div>
       {(requests && requests.length > 0) && <Nav requests={requests}/>}
       {(requests && requests.length > 0) ? 
        <div className="detailed-requests-container">
            {requests && requests.map((request) => {
                return <DetailedEvent request={request} key={request._id}/>
            })}
        </div>: <Typography variant="h4" sx={{marginTop: '25%', textAlign: 'center', color: 'grey'}}>No Leaves to display</Typography>}
    </div>);
}