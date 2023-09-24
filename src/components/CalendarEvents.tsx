import React from 'react'
import './CalendarEvents.css'
import { type CalendarEvent } from '../types'

function CalendarEvents({ events }: { events: CalendarEvent[][] }) {
  const firstEventStartTime =
    events[0]?.[0] === undefined ? 0 : events[0][0].startDate.getMinutes() + events[0][0].startDate.getHours() * 60

  return (
    <div>
      {events.map((cluster, clusterIndex) =>
        cluster.map((event) => (
          <div
            className="event"
            style={{
              height: `${event.lengthMins}px`,
              top: `${event.startDate.getMinutes() + event.startDate.getHours() * 60 + 2 - firstEventStartTime}px`,
              left: `${250 * clusterIndex}px`,
            }}
            key={event.name}
          >
            {event.name}
          </div>
        )),
      )}
    </div>
  )
}

export default CalendarEvents
