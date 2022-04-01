export interface Event {
  id: number
  name: string
  startTime: Date
  description: string
}

export interface Attributes {
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  dayDate: Date
  events: Event[]
}

export interface IEvent {
  id: number
  attributes: Attributes
}
