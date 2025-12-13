import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { populateCalendar } from '../utils/Utils';

export default function FullCalendarView({requests}) {
    return (
        <>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                events={populateCalendar(requests)}
            />
        </>
    );
}

