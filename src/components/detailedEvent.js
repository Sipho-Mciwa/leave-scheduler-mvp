import { CircleCheckBig, CircleX, Clock4 } from "lucide-react";
import { getDurationFull, getLeaveType, getSubmittedDate } from "../utils/Utils";
import { cancelRequest } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function DetailedEvent({request}) {
    const isApproved = request.leaveStatus === 'approved';

    const handleClick = async (reqId) => {
        const message = await cancelRequest(reqId);
        console.log(message.status);
        if (message.status === 200) {
            showSuccessToastMessage(message.data.message);
        }
    }

    const showSuccessToastMessage = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 1000,
            progress: false
        });
    };

    
    return (
    <div className="detailed-upcoming-container">
        <div className="detail-cancel-container">
            <div className="upcoming-details-full">

                <div className='detailed-upcoming-icon'>
                    {request.leaveStatus === 'approved' && <CircleCheckBig className='dash-icon-inverse-approved'/>}
                    {request.leaveStatus === 'pending' && <Clock4 className='dash-icon-inverse-pending'/>}
                    {request.leaveStatus === 'rejected' && <CircleX className='dash-icon-inverse-rejected'/>}
                </div>
                <div className="event-info">
                    <div className="upcoming-container-2">
                        <p className="event-type">{getLeaveType(request)} Leave</p>
                        <p className={request.leaveStatus + '-2'}>{request.leaveStatus}</p>
                    </div>
                    <p className="event-duration"><span className="title">{getDurationFull(request)}</span></p>
                    <p className="days"><span className="title">{request.reason}</span></p>
                </div>
            </div>
                
            {request.leaveStatus === 'pending' && <div className="cancel-btn-container">
                <button className="cancel-btn-2" onClick={() => {handleClick(request._id)}}>Cancel Request</button>
            </div>}
        </div>
        <div className="more-details">
            <p className="submitted"><span className="title">Submitted:</span> {getSubmittedDate(request.createdAt)}</p>
            {isApproved && <p><span className="title">Approver:</span> {request.approverId.name}</p>}
        </div>
        {isApproved && <div className="comment-section">
            <p className="title">Comments:</p>
            <p className="comment">{request.comment}</p>
        </div>}
        <ToastContainer />
    </div>);
}