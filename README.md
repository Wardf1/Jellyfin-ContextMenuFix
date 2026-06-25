# Jellyfin Context Menu Fix Script

A JavaScript workaround for **Jellyfin 10.11.x**, where right-clicking (RMB / PPM) opens **Multi Select** instead of the normal **More (...)** context menu.

This script intercepts right-click behavior on Jellyfin item cards and opens the same menu as clicking the `...` button.

---

## Features

* ✅ Right-click opens the **More (...)** menu on Jellyfin items
* ✅ `Ctrl + Right Click` keeps Jellyfin's original **Multi Select**
* ✅ `Shift + Right Click` opens the browser's native context menu
* ✅ Right-click on empty background/slider space opens the browser's native context menu
* ✅ Works with:

  * Libraries
  * Movies
  * TV Shows
  * Seasons
  * Episodes
* ✅ Compatible with:

  * Jellyfin Web
  * Jellyfin Desktop
* ✅ No Jellyfin core modifications required

---

# Requirements

You must install the **JavaScript Injector** plugin.

Repository:

[Jellyfin JavaScript Injector GitHub](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)

Supported versions:

* Jellyfin 10.11.x
* Jellyfin 10.10.7

The plugin allows injecting custom JavaScript directly into the Jellyfin Web UI without manually editing Jellyfin's frontend files.

---

# Installing JavaScript Injector

## Step 1

Open:

```text
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

```text
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

This may help avoid permission issues when the plugin injects scripts into Jellyfin Web.

---

# Installing the Script

Open:

```text
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

| Action                                      | Result                         |
| ------------------------------------------- | ------------------------------ |
| Right Click on an item                      | Opens Jellyfin More (...) menu |
| Right Click on background/empty slider area | Opens browser context menu     |
| Ctrl + Right Click                          | Jellyfin Multi Select          |
| Shift + Right Click                         | Browser native context menu    |

---

# Notes

This is only a temporary workaround for the Jellyfin 10.11.x right-click behavior issue.

The script does not modify Jellyfin core files and can be disabled or removed at any time from the JavaScript Injector plugin settings.

---

# Credits

* Jellyfin Team
* n00bcodr for the JavaScript Injector plugin

Plugin repository:

https://github.com/n00bcodr/Jellyfin-JavaScript-Injector
