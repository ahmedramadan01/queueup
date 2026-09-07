import { useParams } from 'react-router-dom';

export function JoinQueuePage() {
  const { publicCode } = useParams();
  return (
    <main className="public-page">
      <section className="join-panel">
        <div className="brand">QueueUp</div>
        <p className="eyebrow">QUEUE {publicCode}</p>
        <h1>Join the queue</h1>
        <p>Enter your name to receive your digital ticket.</p>
        <form>
          <label htmlFor="customerName">Your name</label>
          <input id="customerName" name="customerName" autoComplete="name" />
          <button className="button button--primary" type="submit">Join queue</button>
        </form>
      </section>
    </main>
  );
}
