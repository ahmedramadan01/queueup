import { useParams } from 'react-router-dom';

export function QueueDetailsPage() {
  const { queueId } = useParams();
  return (
    <section>
      <header className="page-header"><div><p className="eyebrow">LIVE QUEUE</p><h1>Queue details</h1></div></header>
      <div className="card">
        <p>Queue ID: {queueId}</p>
        <p>This page will contain the waiting list, QR code, and Call next controls.</p>
      </div>
    </section>
  );
}
