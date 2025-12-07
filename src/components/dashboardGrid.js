import { Grid, Paper, styled } from "@mui/material";
import { Calendar, CircleCheckBig, Clock4, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { getRequests } from "../services/api";
import Event from "./event";
import { getPendingReqs } from "../utils/Utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: '20px 20px 5px 20px',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  borderRadius: '10px',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: '5px 20px 5px 20px',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  borderRadius: '10px',
  height: '350px',
}));

export default function DashboardGrid() {
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
    }, []);

    console.log(requests);
    return(
        <>
            <Grid container spacing={3}>
                <Grid size={3}>
                    <Item>
                        <div className='dash-cal-icon'>
                            <Calendar className='dash-icon'/>
                        </div>
                        <p>Available Leave</p>
                        <p><span style={{fontWeight: 'bold', color: 'black'}}>18</span> Days</p>
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                        <div className='dash-clock-icon'>
                            <Clock4 className='dash-icon'/>
                        </div>
                        <p>Pending Requests</p>
                        <p><span style={{fontWeight: 'bold', color: 'black'}}>{requests && getPendingReqs(requests)}</span> requests</p>
                    </Item>
                </Grid>
                <Grid size={3}>
                <Item>
                        <div className='dash-check-icon'>
                            <CircleCheckBig className='dash-icon'/>
                        </div>
                        <p>Approved This Year</p>
                        <p><span style={{fontWeight: 'bold', color: 'black'}}>12</span> Days</p>
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                        <div className='dash-up-icon'>
                            <TrendingUp className='dash-icon'/>
                        </div>
                        <p>Used Days</p>
                        <p><span style={{fontWeight: 'bold', color: 'black'}}>7</span> Days</p>
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{paddingTop: '25px'}}>
                {/* lower grid */}
                <Grid size={6}>
                    <Item2>
                        <p style={{color: 'black'}}>Upcoming Leave</p>
                        <div className="upcoming-leaves">
                            {requests && requests.map((request) => {
                                return <Event request={request}/>
                            })}
                        </div>
                        <button className="view-requests-btn" type="button">View All Requests</button>
                    </Item2>
                </Grid>
                <Grid size={6}>
                    <Item2>
                        <p style={{color: 'black'}}>Recent Activity</p>
                    </Item2>
                </Grid>
            </Grid>
        </>
    )
}