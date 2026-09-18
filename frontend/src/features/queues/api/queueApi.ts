import { httpClient } from '../../../api/httpClient';
import type {
  JoinQueueRequest,
  PublicQueue,
  QueueEntry,
  QueueSummary,
  Ticket,
} from '../types/queue.types';

export const queueApi = {
  async list(): Promise<QueueSummary[]> {
    const response = await httpClient.get<QueueSummary[]>('/queues');
    return response.data;
  },

  async entries(queueId: string): Promise<QueueEntry[]> {
    const response = await httpClient.get<QueueEntry[]>(`/queues/${queueId}/entries`);
    return response.data;
  },

  async publicDetails(publicCode: string): Promise<PublicQueue> {
    const response = await httpClient.get<PublicQueue>(`/public/queues/${publicCode}`);
    return response.data;
  },

  async join(publicCode: string, body: JoinQueueRequest): Promise<Ticket> {
    const response = await httpClient.post<Ticket>(`/public/queues/${publicCode}/entries`, body);
    return response.data;
  },

  async callNext(queueId: string): Promise<QueueEntry> {
    const response = await httpClient.post<QueueEntry>(`/queues/${queueId}/call-next`);
    return response.data;
  },
};
