import React from 'react'
import { getSortedByStartDate, isCollision } from '../utils'
import { type CalendarEvent } from '../types'
import CalendarEvents from './CalendarEvents'

const events = [
  {
    name: 'Event5',
    startDate: new Date('2023-09-23T08:45:00'),
    endDate: new Date('2023-09-23T09:45:00'),
    lengthMins: 60,
  },
  {
    name: 'Event1',
    startDate: new Date('2023-09-23T08:00:00'),
    endDate: new Date('2023-09-23T08:30:00'),
    lengthMins: 30,
  },
  {
    name: 'Event2',
    startDate: new Date('2023-09-23T08:30:00'),
    endDate: new Date('2023-09-23T09:00:00'),
    lengthMins: 30,
  },
  {
    name: 'Event4',
    startDate: new Date('2023-09-23T08:30:00'),
    endDate: new Date('2023-09-23T08:45:00'),
    lengthMins: 15,
  },
  {
    name: 'Event3',
    startDate: new Date('2023-09-23T08:15:00'),
    endDate: new Date('2023-09-23T08:30:00'),
    lengthMins: 15,
  },
  {
    name: 'Event6',
    startDate: new Date('2023-09-23T09:15:00'),
    endDate: new Date('2023-09-23T10:30:00'),
    lengthMins: 75,
  },
]

const sortedEvents = getSortedByStartDate(events)

const isCollisionInCluster = (cluster: CalendarEvent[], currentEvent: CalendarEvent) => {
  return cluster.some((e) => isCollision(e, currentEvent))
}

const clusteredEvents = sortedEvents.reduce<CalendarEvent[][]>(
  (result, currentEvent) => {
    const index = result.findIndex((cluster) => !isCollisionInCluster(cluster, currentEvent))
    if (index === -1) {
      result.push([currentEvent])
      return result
    }
    result[index].push(currentEvent)
    return result
  },
  [[]],
)

function Calendar() {
  return <CalendarEvents events={clusteredEvents} />
}

export default Calendar
