import { MessageSquare } from "lucide-react";
import { approveRequest, rejectRequest } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

export default function ReviewRequest({setIsBtnClicked, request}) {
    const [approverComment, setComment] = useState({comment: ''});

     const handleInputChange = (event) => {
        const {name, value} = event.target;

        setComment({
            ...approverComment,
            [name]: value
        });
    };
    
    const handleApproveClick = async (reqId, comment) => {
        const message = await approveRequest(reqId, comment);
        if (message.status === 200) {
            showSuccessToastMessage(message.data.message);
        }
    }

    const handleRejectClick = async (reqId, comment) => {
        const message = await rejectRequest(reqId, comment);

        if (message.status === 200) {
            showInfoToastMessage(message.data.message);
        }
    }

    const showSuccessToastMessage = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 1000,
            progress: false
        });
    };

    const showInfoToastMessage = (msg) => {
        toast.info(msg, {
            position: "top-right",
            autoClose: 1000,
            progress: false
        });
    };
    
    return (
    <div>
        <div>
            <div className="approver-comment-section">
                <MessageSquare className="msg-icon"/>
                <label className="comment-label">Add Comment</label>
            </div>
            <ToastContainer />
            <div>
                <textarea placeholder="Optional: Add a comment..." className={"comment-textarea"} draggable name="comment" value={approverComment.comment} onChange={handleInputChange}></textarea>
            </div>
            <div className="review-requests-btns-container">
                <button className="review-requests-btn-approve" type="button" onClick={() => handleApproveClick(request._id, approverComment)}>Approval</button>
                <button className="review-requests-btn-reject" type="button" onClick={() => handleRejectClick(request._id, approverComment)}>Reject</button>
            </div>
            <button className="review-requests-btn-cancel" type="button" onClick={() => {setIsBtnClicked(false)}}>Cancel</button>
        </div>
    </div>)
}