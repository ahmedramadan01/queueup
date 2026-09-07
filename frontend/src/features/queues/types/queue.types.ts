export type QueueStatus = 'OPEN' | 'PAUSED' | 'CLOSED';
export type QueueEntryStatus =
  | 'WAITING'
  | 'CALLED'
  | 'SERVING'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'NO_SHOW';

export interface QueueSummary {
  id: string;
  name: string;
  publicCode: string;
  status: QueueStatus;
  waitingCount: number;
  estimatedWaitMinutes: number;
}

export interface QueueEntry {
  id: string;
  ticketNumber: number;
  customerName: string;
  status: QueueEntryStatus;
  joinedAt: string;
}

export interface PublicQueue {
  publicCode: string;
  tenantName: string;
  queueName: string;
  status: QueueStatus;
  waitingCount: number;
  estimatedWaitMinutes: number;
}

export interface JoinQueueRequest {
  customerName: string;
}

export interface Ticket {
  accessToken: string;
  ticketNumber: number;
  status: QueueEntryStatus;
  peopleAhead: number;
  estimatedWaitMinutes: number;
}
