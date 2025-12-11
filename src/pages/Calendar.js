import { Typography } from "@mui/material";

export default function Calendar() {
    return (<div>
        <div>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Team Calendar</Typography>
            <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', color: 'gray'}}>View all team leave schedules at a glance</p>
        </div>
    </div>);
}