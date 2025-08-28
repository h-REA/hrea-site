# Content Editing Guide

This guide explains how to edit website content without touching JSX/React code.

## Overview

All website content is now stored in the `src/content/site-content.json` file. This means you can update text, links, and other content by simply editing this JSON file, and the changes will automatically appear on the website.

## How to Edit Content

### 1. Find the Content File
Navigate to: `src/content/site-content.json`

### 2. Edit the JSON File
The file is structured in sections that correspond to different parts of the website:

```json
{
  "header": { ... },
  "hero": { ... },
  "sections": {
    "how_it_works": { ... },
    "who_is_for": { ... },
    "roadmap": { ... },
    "funding": { ... },
    "get_involved": { ... }
  },
  "footer": { ... }
}
```

### 3. Common Editing Tasks

#### Update Header Announcement
```json
"header": {
  "announcement": {
    "text": "The \"Sapling\" 0.1.0-beta release is out now! 🌿 What will you create?",
    "links": {
      "release": "https://github.com/h-REA/hREA/releases/tag/happ-0.1.0-beta",
      "learn": "https://docs.hrea.io",
      "build": "https://github.com/h-REA/hREA/releases/tag/happ-0.1.0-beta",
      "share": "https://github.com/h-REA/hrea/issues"
    }
  }
}
```

#### Update Hero Section
```json
"hero": {
  "tags": ["open source", "distributed technology", "accounting", "valueflows ontology"],
  "title": {
    "line1": "Scalable & distributed",
    "line2": "framework for economic",
    "line3": "network coordination"
  }
}
```

#### Add New Roadmap Phase
```json
"roadmap": {
  "phases": [
    {
      "title": "New Phase Name",
      "period": "January 2025 - March 2025",
      "items": [
        { "text": "Simple text item" },
        {
          "text": "Item with a link to a website.",
          "link": {
            "text": "website",
            "url": "https://example.com"
          }
        }
      ]
    }
  ]
}
```

#### Update Sponsors
```json
"footer": {
  "sponsors": {
    "oak": {
      "items": [
        {
          "name": "New Sponsor Name",
          "url": "https://newsponsor.com"
        }
      ]
    }
  }
}
```

## What You Can Edit

### ✅ Safe to Edit
- All text content (titles, descriptions, paragraphs)
- Links and URLs
- Email addresses
- Social media links
- Sponsor information
- Roadmap phases and timelines
- Button text
- Navigation menu items

### ❌ Don't Change
- JSON structure (the property names like "header", "hero", etc.)
- Array structures (the `[` and `]` brackets)
- File paths or technical references

## JSON Editing Tips

### 1. Always Keep Valid JSON
- Use double quotes `"` for strings, not single quotes `'`
- Don't forget commas `,` between items
- Don't add commas after the last item in a list

### 2. Special Characters
- Use `\"` for quotes inside text: `"The \"Sapling\" release"`
- Use `\\` for backslashes
- Line breaks are represented as `<br />` in the HTML

### 3. Testing Changes
After editing the content file:
1. Save the file
2. Restart the development server: `npm run develop`
3. Check the website to see your changes

## Examples of Common Updates

### Update Release Information
Change the announcement text and links when there's a new release:

```json
"announcement": {
  "text": "The \"New Release\" 0.2.0 is out now! 🚀 Try it today!",
  "links": {
    "release": "https://github.com/h-REA/hREA/releases/tag/happ-0.2.0",
    "learn": "https://docs.hrea.io",
    "build": "https://github.com/h-REA/hREA/releases/tag/happ-0.2.0",
    "share": "https://github.com/h-REA/hrea/issues"
  }
}
```

### Add New Team Member/Sponsor
```json
"sponsors": {
  "oak": {
    "items": [
      {
        "name": "New Sponsor",
        "url": "https://newsponsor.com"
      }
    ]
  }
}
```

### Update Contact Information
```json
"footer": {
  "social": [
    { "text": "Email", "url": "mailto:newemail@hrea.io" },
    { "text": "Discord", "url": "https://discord.gg/newlink" }
  ]
}
```

## Getting Help

If you run into issues:
1. Check that your JSON is valid using an online JSON validator
2. Make sure you haven't accidentally removed any commas or quotes
3. Compare your changes with the original structure
4. Ask for technical help if the website breaks after your changes

## Backup

Before making major changes, consider copying the `site-content.json` file as a backup so you can restore it if needed.
