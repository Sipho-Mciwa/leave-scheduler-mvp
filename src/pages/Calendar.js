import { Typography } from "@mui/material";
import FullCalendarView from "../components/Calendar";
import { useEffect, useState } from "react";
import { getPendingRequests } from "../services/api";

export default function Calendar() {
    const [requests, setRequests] = useState(null)
            
        useEffect(() => {
            const handleOnLoad = async () => {
                try {
                    const data = await getPendingRequests();
                    setRequests(data);
                } catch (error) {
                    console.error(error.message);
                }
            };
    
            handleOnLoad();
        }, []);

    return (<div>
        <div>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Team Calendar</Typography>
            <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', color: 'gray'}}>View all team leave schedules at a glance</p>
        </div>
        <div className="leave-type-info">
            <p>Leave Type:</p>
            <div className="color-block-blue"></div>
            <p>Vacation</p>

            <div className="color-block-red"></div>
            <p>Sick</p>

            <div className="color-block-purple"></div>
            <p>Personal</p>
        </div>
        <div className="calendar-container">
            <FullCalendarView requests={requests}/>
        </div>
    </div>);
}