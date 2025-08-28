# 🎨 hREA Content Management System

A user-friendly web interface for managing hREA website content without editing JSON files directly.

## 🚀 Quick Start

### Option 1: Run from main project
```bash
npm run cms
```

### Option 2: Run from CMS directory  
```bash
cd cms
npm install
npm start
```

Then open: **http://localhost:3001**

## ✨ Features

### 📢 **Announcement Manager**
- **Visual switcher** between 5 announcement types
- **Live preview** of changes before saving
- **Easy enable/disable** toggle
- **Multiple action buttons** with primary/secondary styles

### 🎯 **Content Editor**
- **Hero section** title and content editing
- **Navigation menu** management
- **Footer & sponsors** information
- **All content sections** editable through forms

### 💾 **Safe Editing**
- **Auto-backup** functionality
- **Revert changes** without saving
- **Real-time preview** of announcements
- **Form validation** to prevent JSON errors

### 📱 **User Experience**
- **Mobile-friendly** responsive design
- **Beautiful gradients** matching hREA brand
- **Intuitive tabs** for content organization
- **Status notifications** for all actions

## 🎛️ Interface Sections

### 1. **📢 Announcements**
Switch between announcement types:
- 🌿 **Release** (Green) - For new releases
- 💝 **Funding** (Blue) - For sponsorship campaigns
- ⚠️ **Maintenance** (Orange) - For system maintenance
- 🤝 **Community** (Purple) - For community engagement
- 📢 **Update** (Blue) - For documentation updates

### 2. **🎯 Hero Section**
Edit the main landing page content:
- Title lines (3 separate inputs)
- Description text and links
- Call-to-action buttons

### 3. **🧭 Navigation**
Manage menu items:
- Menu text and link URLs
- Add/remove navigation items
- Reorder menu structure

### 4. **📄 Content Sections**
Edit main website sections:
- "How it works" content
- "Who is hREA for" descriptions
- Roadmap phases and timelines
- All section headings and text

### 5. **👥 Footer & Sponsors**
Manage sponsor information:
- Oak sponsors with logos
- Sapling sponsors
- Footer credits and links
- Legal and license information

## 🔧 Technical Details

### Architecture
- **Backend**: Express.js server with REST API
- **Frontend**: Vanilla JavaScript with modern CSS
- **Data**: Direct JSON file manipulation
- **Port**: Runs on http://localhost:3001

### API Endpoints
- `GET /api/content` - Load all content
- `POST /api/content` - Save all content
- `GET /api/content/:section` - Load specific section
- `PUT /api/content/:section` - Update specific section
- `POST /api/backup` - Create timestamped backup

### File Structure
```
cms/
├── server.js           # Express server
├── package.json        # CMS dependencies  
├── public/
│   ├── index.html     # CMS interface
│   └── cms.js         # Frontend JavaScript
└── README.md          # This file
```

## 🛡️ Safety Features

### Automatic Backups
- Creates timestamped backups before major changes
- Stored in `src/content/backups/`
- Manual backup creation available

### Change Management  
- **Revert function** restores unsaved changes
- **Real-time preview** shows changes before saving
- **Form validation** prevents JSON syntax errors
- **Status notifications** confirm all actions

### File Safety
- Direct JSON file manipulation
- Preserves JSON structure and formatting
- Validates content before saving
- No risk of corrupting the website

## 🎯 Usage Tips for Lynn

### Quick Workflow
1. **Open CMS**: Run `npm run cms` and visit http://localhost:3001
2. **Make changes**: Use the visual forms instead of editing JSON
3. **Preview**: See announcement changes live in the preview
4. **Save**: Click "💾 Save Changes" when satisfied
5. **Test**: Check the actual website to see changes

### Common Tasks
- **Switch to funding campaign**: Announcements tab → Change dropdown to "💝 Funding"
- **Update release info**: Edit the "🌿 Release" announcement text and buttons
- **Hide announcements**: Uncheck "Enable announcements"
- **Add new sponsor**: Footer tab → Add sponsor information
- **Update roadmap**: Content Sections tab → Edit roadmap phases

### Best Practices
- **Create backup** before major changes
- **Test changes** on development site first
- **Save frequently** to avoid losing work
- **Use preview** to verify announcement appearance

## 🚀 Development

### Start in development mode
```bash
npm run cms:dev
```

This uses `nodemon` for auto-restart on file changes.

### Adding New Features
The CMS is designed to be easily extensible:
- Add new tabs in `index.html`
- Create corresponding JavaScript functions in `cms.js`
- Add API endpoints in `server.js` if needed

## 🌿 Integration with hREA

The CMS directly modifies the `src/content/site-content.json` file that the main Gatsby website uses. Changes are immediately available after restarting the Gatsby development server.

**Perfect for Lynn**: No more JSON editing, no risk of syntax errors, beautiful visual interface! 🎨