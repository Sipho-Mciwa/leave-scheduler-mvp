import {  Grid, Typography } from "@mui/material";
import RequestCard from "../../components/requestCard";
import { useEffect, useState } from "react";
import { getPendingRequests } from "../../services/api";
import { getPendingReqs } from "../../utils/Utils";


export default function PendingRequests() {

    const [requests, setRequests] = useState(null)
            

    useEffect(() => {
        const handleOnLoad = async () => {
            try {
                const data = await getPendingRequests();
                const filteredData = data.filter((request) => request.leaveStatus === 'pending');
                setRequests(filteredData);
            } catch (error) {
                console.error(error.message);
            }
        };

        handleOnLoad();
    }, [requests]);

    return (<div>
        <div>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Pending Approvals</Typography>
            <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', color: 'gray'}}>Review and approve team leave requests</p>
        </div>
        <div className="more-details-container">
            <div className="more-details-2">
                <p>Pending Requests</p>
                <p>{requests && getPendingReqs(requests)}</p>
            </div>
            <div className="more-details-2">
                <p>With Conflicts</p>
                <p>1</p>
            </div>
            <div className="more-details-2">
                <p>Avg Response Time</p>
                <p>2.3 days</p>
            </div>
        </div>
        <div className="searchBar">
            <input className="filter-search" placeholder="Search by employee name"></input>
            <button className="filter-btn">Search</button>
        </div>
        {(requests && (getPendingReqs(requests) !== 0)) ? <div className="grid-container">
            <Grid container columnSpacing={6}>
                {requests && requests.map((request) => {
                    return (
                        <Grid size={6}>
                            <RequestCard request={request}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div> : <Typography variant="h4" sx={{marginTop: '25%', textAlign: 'center', color: 'grey'}}>No Pending Leaves</Typography>}
    </div>);
}