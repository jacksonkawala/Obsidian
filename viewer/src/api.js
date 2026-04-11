const API = 'http://localhost:3001/api';

export async function fetchPages(domain) {
  const url = domain ? `${API}/pages?domain=${domain}` : `${API}/pages`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchPage(domain, slug) {
  const res = await fetch(`${API}/pages/${domain}/${slug}`);
  return res.json();
}

export async function fetchIndex() {
  const res = await fetch(`${API}/index`);
  return res.json();
}

export async function fetchLog() {
  const res = await fetch(`${API}/log`);
  return res.json();
}

export async function fetchSources(domain) {
  const res = await fetch(`${API}/sources/${domain}`);
  return res.json();
}

export async function fetchData(filename) {
  const res = await fetch(`${API}/data/${filename}`);
  return res.json();
}

export async function fetchTaskStatuses(domain, slug) {
  const res = await fetch(`${API}/tasks/${domain}/${slug}`);
  return res.json();
}

export async function updateTaskStatus(domain, slug, taskId, done) {
  const res = await fetch(`${API}/tasks/${domain}/${slug}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ taskId, done }),
  });
  return res.json();
}
