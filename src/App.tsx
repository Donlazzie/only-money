import { useEffect, useState } from 'react';

type Ledger = {
  sequence: number;
  closed_at: string;
  transaction_count: number;
  operation_count: number;
};

const API_URL =
  (import.meta.env as { VITE_API_URL?: string }).VITE_API_URL ||
  'http://localhost:4000';

export default function App() {
  const [ledger, setLedger] = useState<Ledger | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/ledger`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setLedger(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Stellar Dev Toolkit</h1>
      <p>A minimal frontend for the Stellar ecosystem.</p>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {ledger ? (
        <div
          style={{
            marginTop: '1.5rem',
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          <h2>Latest Testnet Ledger</h2>
          <p>
            <strong>Sequence:</strong> {ledger.sequence}
          </p>
          <p>
            <strong>Closed at:</strong>{' '}
            {new Date(ledger.closed_at).toLocaleString()}
          </p>
          <p>
            <strong>Transactions:</strong> {ledger.transaction_count}
          </p>
          <p>
            <strong>Operations:</strong> {ledger.operation_count}
          </p>
        </div>
      ) : (
        !error && <p>Loading latest ledger…</p>
      )}
    </main>
  );
}