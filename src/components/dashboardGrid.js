import { Grid, Paper, styled, Typography } from "@mui/material";
import { Calendar, CircleCheckBig, Clock4, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { getRequests } from "../services/api";
import Event from "./event";
import { getPendingReqs } from "../utils/Utils";
import { useNavigate } from "react-router-dom";

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

const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: '5px 20px 5px 20px',
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  borderRadius: '10px',
  height: '350px',
}));

export default function DashboardGrid() {
    const [requests, setRequests] = useState(null);
    const navigate = useNavigate();
    
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
                        <p><span style={{fontWeight: 'bold', color: 'black'}}>{requests ? getPendingReqs(requests) : '0'}</span> requests</p>
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
                    {(requests && requests.length > 0) ? (<Item2>
                        <p style={{color: 'black'}}>Upcoming Leave</p>
                        <div className="upcoming-leaves">
                            {requests && requests.map((request) => {
                                return <Event request={request} key={request._id}/>
                            })}
                        </div>
                        <button className="view-requests-btn" type="button" onClick={() =>  navigate("/my-requests")}>View All Requests</button>
                    </Item2>) : 
                    <Item3>
                        <Typography variant="h4" sx={{marginTop: '35%', color: 'grey'}}>No Leaves To Display</Typography>
                    </Item3>}
                </Grid>
                <Grid size={6}>
                    {/* {requests ? (<Item2>
                        <p style={{color: 'black'}}>Recent Activity</p>
                    </Item2>) :  */}
                    <Item3>
                        <Typography variant="h4" sx={{marginTop: '35%', color: 'grey'}}>No Recent Activity</Typography>
                    </Item3>
                </Grid>
            </Grid>
        </>
    )
}