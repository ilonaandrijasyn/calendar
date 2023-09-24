import { type CalendarEvent } from '../types'

export const getSortedByStartDate = (data: CalendarEvent[]) => {
  return data.sort((event1, event2) => event1.startDate.valueOf() - event2.startDate.valueOf())
}

export const isCollision = (event1: CalendarEvent, event2: CalendarEvent) => {
  if (event2.startDate <= event1.startDate && event2.endDate > event1.startDate) {
    return true
  }
  return event2.startDate > event1.startDate && event2.startDate < event1.endDate
}
