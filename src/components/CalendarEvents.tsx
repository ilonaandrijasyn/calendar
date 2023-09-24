import React from 'react'
import './CalendarEvents.css'

interface CalendarEvent {
  name: string
  startDate: Date
  endDate: Date
  lengthMin: number
}

function CalendarEvents({ events }: { events: CalendarEvent[][] }) {
  const firstEventStartTime = events[0][0].startDate.getMinutes() + events[0][0].startDate.getHours() * 60

  return (
    <div>
      {events.map((cluster, clusterIndex) =>
        cluster.map((event) => (
          <div
            className="event"
            style={{
              height: `${event.lengthMin}px`,
              top: `${event.startDate.getMinutes() + event.startDate.getHours() * 60 + 2 - firstEventStartTime}px`,
              left: `${clusterIndex === 0 ? 0 : 250 * clusterIndex}px`,
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
