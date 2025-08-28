const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const CONTENT_FILE = path.join(__dirname, '../src/content/site-content.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Read content file
function readContent() {
  try {
    const content = fs.readFileSync(CONTENT_FILE, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading content file:', error);
    return null;
  }
}

// Write content file
function writeContent(data) {
  try {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing content file:', error);
    return false;
  }
}

// Routes
app.get('/api/content', (req, res) => {
  const content = readContent();
  if (content) {
    res.json(content);
  } else {
    res.status(500).json({ error: 'Failed to read content file' });
  }
});

app.post('/api/content', (req, res) => {
  const success = writeContent(req.body);
  if (success) {
    res.json({ message: 'Content saved successfully' });
  } else {
    res.status(500).json({ error: 'Failed to save content file' });
  }
});

// Get specific section
app.get('/api/content/:section', (req, res) => {
  const content = readContent();
  if (content && content[req.params.section]) {
    res.json(content[req.params.section]);
  } else {
    res.status(404).json({ error: 'Section not found' });
  }
});

// Update specific section
app.put('/api/content/:section', (req, res) => {
  const content = readContent();
  if (content) {
    content[req.params.section] = req.body;
    const success = writeContent(content);
    if (success) {
      res.json({ message: 'Section updated successfully' });
    } else {
      res.status(500).json({ error: 'Failed to save content' });
    }
  } else {
    res.status(500).json({ error: 'Failed to read content file' });
  }
});

// Backup content
app.post('/api/backup', (req, res) => {
  const content = readContent();
  if (content) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(__dirname, `../src/content/backups/site-content-${timestamp}.json`);
    
    // Create backups directory if it doesn't exist
    const backupDir = path.dirname(backupFile);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    try {
      fs.writeFileSync(backupFile, JSON.stringify(content, null, 2));
      res.json({ message: 'Backup created successfully', file: `site-content-${timestamp}.json` });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create backup' });
    }
  } else {
    res.status(500).json({ error: 'Failed to read content file' });
  }
});

// Serve the CMS interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`
🎨 hREA Content Management System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Server running at: http://localhost:${PORT}
📂 Managing content: ${CONTENT_FILE}
🔄 Auto-saves changes to JSON file

Ready for Lynn to manage website content! 🌿
  `);
});

module.exports = app;