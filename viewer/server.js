import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const app = express();
const PORT = 3001;
const ROOT = path.resolve(import.meta.dirname, '..');

app.use(cors());
app.use(express.json());

// Serve raw assets (images, PDFs)
app.use('/assets', express.static(path.join(ROOT, 'raw', 'assets')));

// List all wiki pages, optionally filtered by domain
app.get('/api/pages', async (req, res) => {
  const { domain } = req.query;
  const wikiDir = path.join(ROOT, 'wiki');

  try {
    const pages = [];
    const domains = domain ? [domain] : await fs.readdir(wikiDir);

    for (const d of domains) {
      const domainDir = path.join(wikiDir, d);
      const stat = await fs.stat(domainDir).catch(() => null);
      if (!stat || !stat.isDirectory()) continue;

      const files = await fs.readdir(domainDir);
      for (const file of files) {
        if (!file.endsWith('.md')) continue;
        const filePath = path.join(domainDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(content);
        pages.push({
          domain: d,
          filename: file,
          slug: file.replace('.md', ''),
          path: `wiki/${d}/${file}`,
          frontmatter: data,
        });
      }
    }

    res.json(pages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read a specific wiki page
app.get('/api/pages/:domain/:slug', async (req, res) => {
  const { domain, slug } = req.params;
  const filePath = path.join(ROOT, 'wiki', domain, `${slug}.md`);

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, content: body } = matter(content);
    res.json({ frontmatter: data, content: body, path: `wiki/${domain}/${slug}.md` });
  } catch (err) {
    res.status(404).json({ error: 'Page not found' });
  }
});

// Read index.md
app.get('/api/index', async (req, res) => {
  try {
    const content = await fs.readFile(path.join(ROOT, 'index.md'), 'utf-8');
    const { data, content: body } = matter(content);
    res.json({ frontmatter: data, content: body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read log.md
app.get('/api/log', async (req, res) => {
  try {
    const content = await fs.readFile(path.join(ROOT, 'log.md'), 'utf-8');
    const { data, content: body } = matter(content);
    res.json({ frontmatter: data, content: body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List raw source files by domain
app.get('/api/sources/:domain', async (req, res) => {
  const { domain } = req.params;
  const dir = path.join(ROOT, 'raw', domain);

  try {
    const files = await fs.readdir(dir);
    const sources = files.filter(f => f !== '.gitkeep');
    res.json(sources);
  } catch (err) {
    res.status(404).json({ error: 'Domain not found' });
  }
});

// Read task status file for a kanban page
app.get('/api/tasks/:domain/:slug', async (req, res) => {
  const { domain, slug } = req.params;
  const statusFile = path.join(ROOT, 'wiki', 'data', `tasks-${domain}-${slug}.json`);
  try {
    const content = await fs.readFile(statusFile, 'utf-8');
    res.json(JSON.parse(content));
  } catch {
    res.json({});
  }
});

// Update task status — writes a JSON file that Claude reads on next ingest
app.post('/api/tasks/:domain/:slug', async (req, res) => {
  const { domain, slug } = req.params;
  const { taskId, done } = req.body;
  const dataDir = path.join(ROOT, 'wiki', 'data');
  const statusFile = path.join(dataDir, `tasks-${domain}-${slug}.json`);

  try {
    await fs.mkdir(dataDir, { recursive: true });

    let statuses = {};
    try {
      const content = await fs.readFile(statusFile, 'utf-8');
      statuses = JSON.parse(content);
    } catch { /* file doesn't exist yet */ }

    statuses[taskId] = { done, updatedAt: new Date().toISOString() };
    await fs.writeFile(statusFile, JSON.stringify(statuses, null, 2));
    res.json({ ok: true, statuses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve chart data files (JSON files in wiki/data/)
app.get('/api/data/:filename', async (req, res) => {
  const filePath = path.join(ROOT, 'wiki', 'data', req.params.filename);
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    res.json(JSON.parse(content));
  } catch (err) {
    res.status(404).json({ error: 'Data file not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Wiki API running at http://localhost:${PORT}`);
});
