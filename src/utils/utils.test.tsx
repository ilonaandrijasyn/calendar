import { type CalendarEvent } from '../types'
import { isCollision } from './index'

const event1: CalendarEvent = {
  name: 'Event 1',
  startDate: new Date('2023-09-23T13:00:00'),
  endDate: new Date('2023-09-23T13:30:00'),
  lengthMin: 30,
}

test('isCollision', () => {
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T11:00:00'),
      endDate: new Date('2023-09-23T13:00:00'),
      lengthMin: 120,
    }),
  ).toBe(false)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T11:00:00'),
      endDate: new Date('2023-09-23T13:10:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T11:00:00'),
      endDate: new Date('2023-09-23T13:30:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T11:00:00'),
      endDate: new Date('2023-09-23T13:50:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:00:00'),
      endDate: new Date('2023-09-23T13:50:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:00:00'),
      endDate: new Date('2023-09-23T13:30:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:00:00'),
      endDate: new Date('2023-09-23T13:15:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:15:00'),
      endDate: new Date('2023-09-23T13:20:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:15:00'),
      endDate: new Date('2023-09-23T13:30:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:15:00'),
      endDate: new Date('2023-09-23T14:10:00'),
      lengthMin: 120,
    }),
  ).toBe(true)
  expect(
    isCollision(event1, {
      name: 'Event 2',
      startDate: new Date('2023-09-23T13:30:00'),
      endDate: new Date('2023-09-23T14:10:00'),
      lengthMin: 120,
    }),
  ).toBe(false)
})
