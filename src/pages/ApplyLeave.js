import {  Typography } from "@mui/material";
import FormInput from "../components/FormInput";
import { Info } from "lucide-react";
import { getBalance } from "../services/api";
import { useEffect, useState } from "react";

export default function ApplyLeave() {
    const [leaveBalance, setLeaveBalance] = useState(null)

    useEffect(() => {
        const handleOnLoad = async () => {
            try {
                const balance = await getBalance();
                setLeaveBalance(balance);
            } catch (error) {
                console.error(error.message);
            }
        };

        handleOnLoad();
    }, [])

    

    return (
    <div className="apply-for-leave-container" >
        <div className="form">
            <div>
                <Typography variant="h5" style={{fontWeight: 'bold'}}>Apply for Leave</Typography>
                <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', color: 'gray'}}>Submit a new leave request for approval</p>
            </div>
            <div >
                <FormInput/>
            </div>
        </div>
        <div className="addInfo" >
            <div className="leaveBalanceInfo">
                <p style={{fontFamily: 'sans-serif', fontWeight: 'bold', margin: '10px 8px 20px 8px'}}>Your Leave Balance</p>
                <div className="balance-details">
                    <div className="leave-type">Vacation Leave</div>
                    <div>{leaveBalance && leaveBalance.vacation} days</div>
                </div>
                <div className="balance-details">
                    <div className="leave-type">Sick Leave</div>
                    <div>{leaveBalance && leaveBalance.sick} days</div>
                </div>
                <div className="balance-details">
                    <div className="leave-type">Personal Leave</div>
                    <div>{leaveBalance && leaveBalance.personal} days</div>
                </div>
            </div>
            <div className="guideLinesInfo">
                <div className="guideLinesInfoHeader">
                    <Info/>
                    <p style={{fontFamily: 'sans-serif', fontWeight: 'bold', margin: '5px 0px 0px 15px'}}>Guidelines</p>
                </div>
                <ul>
                    <li>Submit requests at least 2 weeks in advance</li>
                    <li>Sick leave requires medical certificate</li>
                    <li>Maximum 2 weeks consecutive leave</li>
                    <li>Check team calendar for conflicts</li>
                </ul>
            </div>
        </div>
    </div>);
}