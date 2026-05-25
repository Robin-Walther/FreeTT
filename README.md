# FreeTT – Free Virtual Tabletop

**FreeTT** is a free, local-first Virtual Tabletop (VTT) built with Electron. It gives the Dungeon Master a full-featured control screen and players a clean, read-mostly view — no account required, no subscription, no cloud.

---

## Features

- **Dual-screen setup** — separate DM control window and Player display window
- **Fog of War** — paint/erase fog on the DM screen; players only see what you reveal
- **Online Player View** — share a link so remote players can join in any browser (no install needed)
- **Token management** — drag, resize, and label tokens for players and monsters; players can move their own token
- **Initiative / Combat Tracker** — track HP, conditions, and turn order
- **Ruler tool** — measure distances in grid fields or feet (calibratable scale)
- **Map Pins** — Ctrl+click to drop named pins visible to everyone
- **Ping system** — DM and players can ping locations on the map
- **Music player** — background audio with YouTube/URL support and volume control
- **Multi-language UI** — German, English, French, Italian (switchable at runtime)
- **Help overlays** — built-in `?` button explains all actions for both DM and players

---

## Requirements

- Windows 10/11 (64-bit)
- No installation needed — download and run

---

## Quick Start

### Download

Download the latest `FreeTT Setup x.x.x.exe` from the [Releases](../../releases) page and run the installer.

### Run from Source

```powershell
git clone https://github.com/Robin-Walther/FreeTT.git
cd FreeTT
npm install
.\start.ps1
```

> `start.ps1` is required instead of `npm start` to correctly launch the Electron GUI on Windows.

---

## Online / Remote Play

1. Open the **Remote** panel in the DM toolbar.
2. Click **Session starten** — FreeTT starts a local server and creates a public tunnel URL via `localtunnel`.
3. Share the displayed URL with your players. They open it in any modern browser — no install needed.
4. Players can move their own token and use the ruler and ping tools.

---

## Build from Source

```powershell
npm run build
```

The installer is written to `dist\FreeTT x.x.x.exe`.

---

## Project Structure

```
FreeTT/
├── main.js            # Electron main process
├── preload.js         # Context bridge (IPC)
├── dm-screen.html     # DM window UI
├── dm-screen.js       # DM window logic
├── styles.css         # DM window styles
├── i18n.js            # Multi-language translations
├── player-web/        # Online Player web app (served to browsers)
│   ├── index.html
│   ├── player.js
│   ├── player.css
│   └── i18n.js
└── start.ps1          # Windows launcher script
```

---

## License

MIT — free to use, modify, and distribute.
