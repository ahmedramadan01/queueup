import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="public-page">
      <section className="join-panel">
        <h1>Page not found</h1>
        <Link to="/">Return to QueueUp</Link>
      </section>
    </main>
  );
}
