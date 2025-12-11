import { Typography } from "@mui/material";
import DetailedEvent from "../components/detailedEvent";
import { getRequests } from "../services/api";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

export default function MyRequests() {
    const [requests, setRequests] = useState(null)
        
    useEffect(() => {
        const handleOnLoad = async () => {
            try {
                const data = await getRequests();
                setRequests(data);
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
       {requests && <Nav requests={requests}/>}
       {requests ? 
        <div className="detailed-requests-container">
            {requests && requests.map((request) => {
                return <DetailedEvent request={request}/>
            })}
        </div>: <Typography variant="h4" sx={{marginTop: '25%', textAlign: 'center', color: 'grey'}}>No Leaves to display</Typography>}
    </div>);
}