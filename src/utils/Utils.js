import moment from "moment/moment";


export function getMonthAndYear() {
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // To display the month name, you can use an array of month names:
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (`${monthNames[monthIndex]} ${year}`);
}

export function getLeaveType(request) {
    if (request.leaveType === 'vacation') {
        return ('Vacation');
    } else if (request.leaveType === 'sick') {
        return ('Sick');
    } else if (request.leaveType === 'personal') {
        return ('Personal');
    }
}

export function getDurationFull(request) {
    const startDate = moment(request.startDate);
    const endDate = moment(request.endDate);
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (`${monthNames[startDate.month()]} ${startDate.date()}, ${startDate.year()} - ${monthNames[endDate.month()]} ${endDate.date()}, ${startDate.year()} (${request.days} days)`);
}

export function getDuration(request) {
    const startDate = moment(request.startDate);
    const endDate = moment(request.endDate);
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (`${monthNames[startDate.month()]} ${startDate.date()} - ${monthNames[endDate.month()]} ${endDate.date()}`);
}

export function getSubmittedDate(request) {
    const startDate = moment(request.createdAt);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (`${monthNames[startDate.month()]} ${startDate.date()}, ${startDate.year()}`);
}

export function getPendingReqs(requests) {
    let pending = 0;
    requests.forEach(request => {
        if (request.leaveStatus === 'pending') pending++;
    });
    return (pending);
}

export function getRejectedReqs(requests) {
    let rejected = 0;
    requests.forEach(request => {
        if (request.leaveStatus === 'rejected') rejected++;
    });
    return (rejected);
}

export function getApprovedReqs(requests) {
    let approved = 0;
    requests.forEach(request => {
        if (request.leaveStatus === 'approved') approved++;
    });
    return (approved);
}

export function populateCalendar(requests) {
    const allEvents = [];
    if (requests) {
        requests.forEach((request) => {
            if (request.leaveStatus === 'approved')
                allEvents.push({title: request.employeeId.name, start: request.startDate, end: request.endDate, color: getEventColor(request.leaveType)})
        })
    }

    return (allEvents);
}

function getEventColor(leave) {
    if (leave === 'sick')
        return ('red');
    else if (leave === 'personal')
        return ('purple');
    else
        return
}