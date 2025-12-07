import { Calendar } from "lucide-react";
import '../assets/global.css';
import { getDuration, getLeaveType } from "../utils/Utils";

export default function Event({request}) {
    const isApproved = request.leaveStatus === 'approved';
    getDuration(request);

    return (
        <div className="upcoming-container">
            <div className="upcoming-details">
                <div className='dash-cal-icon-inverse'>
                    <Calendar className='dash-icon-inverse' />
                </div>
                <div className="event-info">
                    <p className="event-type">{getLeaveType(request)}</p>
                    <p className="event-duration">{getDuration(request)}</p>
                    <p className="days">{request.days} days</p>
                </div>
            </div>
            <div className="status">
                <p className={isApproved ? "approved" : 'pending'}>{request.leaveStatus}</p>
            </div>
        </div>
    );
}