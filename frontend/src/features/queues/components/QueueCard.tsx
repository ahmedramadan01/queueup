import { Link } from 'react-router-dom';
import type { QueueSummary } from '../types/queue.types';

interface QueueCardProps {
  queue: QueueSummary;
}

export function QueueCard({ queue }: QueueCardProps) {
  return (
    <article className="card queue-card">
      <div>
        <span className={`status status--${queue.status.toLowerCase()}`}>{queue.status}</span>
        <h2>{queue.name}</h2>
      </div>
      <dl className="queue-metrics">
        <div><dt>Waiting</dt><dd>{queue.waitingCount}</dd></div>
        <div><dt>Est. wait</dt><dd>{queue.estimatedWaitMinutes} min</dd></div>
      </dl>
      <Link to={`/queues/${queue.id}`}>Manage queue</Link>
    </article>
  );
}
