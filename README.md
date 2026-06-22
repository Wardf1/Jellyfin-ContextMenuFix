# Jellyfin Context Menu Fix Script

A JavaScript workaround for **Jellyfin 10.11.x**, where right-clicking (RMB / PPM) opens **Multi Select** instead of the normal **More (...)** context menu.

This script intercepts the right mouse button and opens the same menu as clicking the `...` button on cards, movies, TV shows, seasons, and episodes.

---

## Features

* ✅ Right-click opens the **More (...)** menu
* ✅ `Ctrl + Right Click` keeps Jellyfin's original **Multi Select**
* ✅ Works with:

  * Libraries
  * Movies
  * TV Shows
  * Seasons
  * Episodes
* ✅ Compatible with:

  * Jellyfin Web
  * Jellyfin Desktop
* ✅ Ignores Editor's Choice carousel
* ✅ No Jellyfin core modifications required

---

# Requirements

You must install the **JavaScript Injector** plugin.

Repository:

[Jellyfin JavaScript Injector GitHub](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)

Supported versions:

* Jellyfin 10.11.x
* Jellyfin 10.10.7

The plugin allows injecting custom JavaScript directly into the Jellyfin Web UI without modifying `index.html`.

---

# Installing JavaScript Injector

## Step 1

Open:

```
Dashboard
└── Plugins
    └── Catalog
        └── ⚙ Settings
```

Click **Add Repository**.

---

## Step 2

For Jellyfin **10.11.x**, add:

```text
https://raw.githubusercontent.com/n00bcodr/jellyfin-plugins/main/10.11/manifest.json
```

For Jellyfin **10.10.7**, add:

```text
https://raw.githubusercontent.com/n00bcodr/jellyfin-plugins/main/10.10/manifest.json
```

Save the repository.

---

## Step 3

Go back to:

```
Dashboard
└── Plugins
    └── Catalog
```

Search for:

```text
JavaScript Injector
```

Install it and restart Jellyfin.

---

# Docker Notes

If you use Docker, you may need to mount `index.html` manually.

Example:

```yaml
services:
  jellyfin:
    volumes:
      - /config:/config
      - /config/index.html:/usr/share/jellyfin/web/index.html
```

This is recommended to avoid permission problems when injecting scripts.

---

# Installing the Script

Open:

```
Dashboard
└── Plugins
    └── JavaScript Injector
```

Press:

```text
Add Script
```

Paste the script.

Enable:

```text
Enabled = ON
```

Save.

Refresh the browser with:

```text
Ctrl + F5
```

or clear the browser cache if the changes do not appear immediately.

---

# Usage

| Action             | Result                    |
| ------------------ | ------------------------- |
| Right Click        | Opens More (...) menu     |
| Ctrl + Right Click | Multi Select              |
| Left Click         | Default Jellyfin behavior |

---

# Compatibility

Tested with:

* Jellyfin Server 10.11.10
* Jellyfin Web
* Jellyfin Desktop
* Jellyfin Enhanced
* Editor's Choice
* JavaScript Injector

---
JavaScript Injector repository:

[n00bcodr/Jellyfin-JavaScript-Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)
