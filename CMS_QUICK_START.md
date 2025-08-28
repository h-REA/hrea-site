# 🎨 hREA CMS Quick Start

## 🚀 Launch the Content Management System

### 1. Start the CMS
```bash
npm run cms
```

### 2. Open in browser
Visit: **http://localhost:3001**

### 3. Edit content visually
- 📢 **Announcements**: Switch between release/funding/maintenance
- 🎯 **Hero Section**: Edit main page title and content  
- 🧭 **Navigation**: Manage menu items
- 📄 **Content Sections**: Edit all website sections
- 👥 **Footer**: Manage sponsors and credits

### 4. Save changes
Click **💾 Save Changes** to update the JSON file

---

## 🎯 For Lynn: No More JSON Editing!

Instead of editing `src/content/site-content.json` directly:

### ❌ **Old Way (Complex)**
```json
{
  "header": {
    "announcements": {
      "current": "funding",
      "types": {
        "funding": {
          "text": "Support hREA development..."
        }
      }
    }
  }
}
```

### ✅ **New Way (Simple)**
1. Run `npm run cms`
2. Open http://localhost:3001
3. Go to "📢 Announcements" tab
4. Select "💝 Funding" from dropdown
5. Edit the message in the text box
6. Click "💾 Save Changes"

---

## 🌟 Benefits

- **Visual editing** - No JSON syntax to worry about
- **Live preview** - See announcement changes instantly
- **Safety features** - Backup/revert functionality
- **Mobile friendly** - Works on phone/tablet
- **Beautiful interface** - Matches hREA design

Ready to make Lynn's life easier! 🌿