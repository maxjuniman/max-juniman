const STORAGE_KEY = 'portfolio_visit_count';

const API_URL = 'https://max-juniman-api.vercel.app/contador';

interface CounterResponse {
  acessos: number;
}

async function fetchCount(): Promise<number | null> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error('API indisponível');

    const data: CounterResponse = await response.json();
    return data.acessos;
  } catch {
    return null;
  }
}

function getCachedCount(): number {
  const cached = localStorage.getItem(STORAGE_KEY);
  return cached ? parseInt(cached, 10) : 0;
}

function setCachedCount(count: number): void {
  localStorage.setItem(STORAGE_KEY, String(count));
}

let visitPromise: Promise<number> | null = null;

export function registerVisit(): Promise<number> {
  if (visitPromise) return visitPromise;

  visitPromise = fetchCount().then((remoteCount) => {
    if (remoteCount !== null) {
      setCachedCount(remoteCount);
      return remoteCount;
    }
    return getCachedCount();
  });

  return visitPromise;
}
