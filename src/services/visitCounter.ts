const STORAGE_KEY = 'portfolio_visit_count';
const VISITED_KEY = 'portfolio_has_visited';
const COUNTER_NAMESPACE = 'portfolio-max-juniman';
const COUNTER_KEY = 'visits';

interface CounterResponse {
  count: number;
}

/**
 * Incrementa o contador usando a API gratuita counterapi.dev
 * Sem necessidade de cadastro ou backend
 */
async function incrementRemote(): Promise<number | null> {
  try {
    const response = await fetch(
      `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`,
      { method: 'GET' },
    );

    if (!response.ok) throw new Error('API indisponível');

    const data: CounterResponse = await response.json();
    return data.count;
  } catch {
    return null;
  }
}

/**
 * Obtém o valor atual do contador sem incrementar
 */
async function getRemoteCount(): Promise<number | null> {
  try {
    const response = await fetch(
      `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}`,
      { method: 'GET' },
    );

    if (!response.ok) throw new Error('API indisponível');

    const data: CounterResponse = await response.json();
    return data.count;
  } catch {
    return null;
  }
}

/**
 * Retorna o valor cacheado no localStorage
 */
function getCachedCount(): number {
  const cached = localStorage.getItem(STORAGE_KEY);
  return cached ? parseInt(cached, 10) : 0;
}

/**
 * Salva o valor no localStorage como cache
 */
function setCachedCount(count: number): void {
  localStorage.setItem(STORAGE_KEY, String(count));
}

/**
 * Verifica se o usuário já visitou nesta sessão
 */
function hasVisitedThisSession(): boolean {
  return sessionStorage.getItem(VISITED_KEY) === 'true';
}

/**
 * Marca que o usuário já visitou nesta sessão
 */
function markVisited(): void {
  sessionStorage.setItem(VISITED_KEY, 'true');
}

/**
 * Registra uma visita e retorna a contagem total.
 * - Primeira visita da sessão: incrementa o contador remoto
 * - Visitas subsequentes na mesma sessão: apenas lê o valor
 * - Se a API falhar: usa localStorage como fallback
 */
export async function registerVisit(): Promise<number> {
  const alreadyVisited = hasVisitedThisSession();

  if (!alreadyVisited) {
    // Primeira visita da sessão — incrementar
    const remoteCount = await incrementRemote();

    if (remoteCount !== null) {
      setCachedCount(remoteCount);
      markVisited();
      return remoteCount;
    }

    // Fallback: incrementar localmente
    const local = getCachedCount() + 1;
    setCachedCount(local);
    markVisited();
    return local;
  }

  // Já visitou nesta sessão — apenas ler
  const remoteCount = await getRemoteCount();

  if (remoteCount !== null) {
    setCachedCount(remoteCount);
    return remoteCount;
  }

  return getCachedCount();
}
