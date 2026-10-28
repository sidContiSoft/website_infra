const localHosts = new Set(['localhost', '127.0.0.1']);

export const API_BASE_URL =
  typeof window !== 'undefined' && localHosts.has(window.location.hostname)
    ? 'http://localhost:4000/website-mail'
    : 'https://adtl-auction-backend.ostaasuite.com/website-mail';
