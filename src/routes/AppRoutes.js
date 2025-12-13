import { Route, Routes } from "react-router-dom";
import ApplyLeave from "../pages/ApplyLeave";
import MyRequests from "../pages/MyRequests";
import Dashboard from "../pages/Dashboard";
import PendingRequests from "../pages/Manager/PendingRequests";
import Calendar from "../pages/Calendar";


export default function AppRouters({ user}) {
    return (<Routes>
        <Route path="/dashboard" element={<Dashboard user={user}/>}/>
        <Route path="/apply-leave" element={<ApplyLeave user={user}/>}/>
        <Route path="/my-requests" element={<MyRequests/>}/>
        <Route path="/pending-requests" element={<PendingRequests/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
    </Routes>);
}