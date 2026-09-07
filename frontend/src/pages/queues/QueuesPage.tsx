import { PageState } from '../../components/feedback/PageState';
import { QueueCard } from '../../features/queues/components/QueueCard';
import { useQueues } from '../../features/queues/hooks/useQueues';

export function QueuesPage() {
  const { data: queues, isPending, isError } = useQueues();

  if (isPending) return <PageState title="Loading queues…" />;
  if (isError) return <PageState title="Queues could not be loaded" message="Check that the backend is running." />;

  return (
    <section>
      <header className="page-header">
        <div><p className="eyebrow">OPERATIONS</p><h1>Queues</h1></div>
        <button className="button button--primary">Create queue</button>
      </header>
      <div className="card-grid">
        {queues?.map((queue) => <QueueCard key={queue.id} queue={queue} />)}
        {!queues?.length && <PageState title="No queues yet" message="Create your first queue to generate a customer QR code." />}
      </div>
    </section>
  );
}
