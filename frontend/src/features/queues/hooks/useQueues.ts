import { useQuery } from '@tanstack/react-query';
import { queueApi } from '../api/queueApi';

export function useQueues() {
  return useQuery({
    queryKey: ['queues'],
    queryFn: queueApi.list,
  });
}
