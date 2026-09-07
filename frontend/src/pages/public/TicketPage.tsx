import { useParams } from 'react-router-dom';

export function TicketPage() {
  const { accessToken } = useParams();
  return (
    <main className="public-page">
      <section className="join-panel">
        <p className="eyebrow">YOUR TICKET</p>
        <h1>You're in the queue</h1>
        <p>Ticket access token: {accessToken}</p>
        <p>Real-time position and waiting-time updates will appear here.</p>
      </section>
    </main>
  );
}
