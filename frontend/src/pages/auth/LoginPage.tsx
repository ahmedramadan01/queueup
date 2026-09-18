import { Link } from "react-router-dom";
export function LoginPage() {
  return (
    <main className="public-page">
      <section className="join-panel">
        <div className="brand">QueueUp</div>
        <h1>Business login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" />
          <button className="button button--primary" type="submit">Log in</button>
          <p className="auth-switch">
            New to QueueUp?{" "}
            <Link to="/register">Create a business account</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
