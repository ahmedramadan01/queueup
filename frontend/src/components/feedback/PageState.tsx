interface PageStateProps {
  title: string;
  message?: string;
}

export function PageState({ title, message }: PageStateProps) {
  return (
    <div className="page-state" role="status">
      <h2>{title}</h2>
      {message && <p>{message}</p>}
    </div>
  );
}
