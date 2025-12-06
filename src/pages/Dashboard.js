import { Typography } from "@mui/material";
import DashboardGrid from "../components/dashboardGrid";
import { getMonthAndYear } from "../utils/dateUtils";

export default function Dashboard({user}) {
    const userName = user.name.split(' ');

    return (
    <div>
        <div>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Welcome back, {userName[0]}!</Typography>
            <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', color: 'gray'}}>Here's your leave overview for {getMonthAndYear()}</p>
        </div>
        <div>
            <DashboardGrid user={user}/>
        </div>
    </div>);
}