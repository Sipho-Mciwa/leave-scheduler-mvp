// import '../assets/global.css';

import { getApprovedReqs, getPendingReqs, getRejectedReqs } from "../utils/Utils";

export default function Nav({requests}) {
    return (
    <nav class="nav">
      <div class="nav-link">Pending <span className="req-count">{getPendingReqs(requests)}</span></div>
      <div class="nav-link">Approved <span className="req-count">{getApprovedReqs(requests)}</span></div>
      <div class="nav-link">Rejected <span className="req-count">{getRejectedReqs(requests)}</span></div>
    </nav>);
}