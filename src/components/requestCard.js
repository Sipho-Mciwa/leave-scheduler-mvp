import { Avatar, Paper, styled } from "@mui/material";
import { Calendar } from "lucide-react";
import { getDurationFull, getLeaveType, getSubmittedDate } from "../utils/Utils";
import { useState } from "react";
import ReviewRequest from "../pages/Manager/ReviewRequest";

export default function RequestCard({request}) {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const Item = styled(Paper)(({ theme }) => ({
            
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
        height: '330px',
        width: '100%',
        marginTop: '30px',
        borderRadius: '10px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0'
    }));


    return (
        
        <>
            <Item className="item-card">              
                <div className='userAvatar-2'>
                    <Avatar className='avatarIcon-2' sx={{ width: '60px', height: '60px'}}/>
                    <div className='userDetails-2'>
                        <p className="user-name">{request.employeeId.name}</p>
                        <p className="user-dept">{request.employeeId.department}</p>
                        <p>{request.employeeId.email}</p>
                    </div>
                </div>
                <div className="user-info">
                    <div className="leave-info">
                        <div>
                            <Calendar />
                        </div>
                        <div className="leave-info-detail">
                            <p className="leave-type">{getLeaveType(request)}</p>
                            <p className="leave-duration">{getDurationFull(request)}</p>
                            <p className="leave-in-days">{request.days} days</p>
                        </div>
                    </div>
                    <div className="reason-info">
                    <p>Reason:</p>
                    <p>{request.reason}</p>
                    <p>Submitted: {getSubmittedDate(request)}</p>
                    </div>
                </div>
            </Item>
            <div className="review-btn-container">
                {isBtnClicked ? <ReviewRequest setIsBtnClicked={setIsBtnClicked} request={request}/> : <button className="review-btn" onClick={() => setIsBtnClicked(true)}>Review Request</button>}
            </div>
        </>
    )
}