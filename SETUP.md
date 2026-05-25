# FreeTT – Einrichtung

**Für Spieler:** Kein Setup nötig. Einfach den Link vom DM im Browser öffnen.

**Für den DM:** FreeTT läuft als eigenständige Windows-App – kein Node.js, kein Account, kein Cloud-Dienst benötigt.

---

## App bauen und verteilen

Dieser Schritt ist nur einmal nötig (und nur auf dem Entwicklungsrechner).

**Voraussetzung:** Node.js (Version 18+) und npm installiert

```bat
cd C:\Pfad\zu\FreeTT
npm install
npm run build
```

Das erstellt `dist\FreeTT-win.zip`. Diese Datei enthält alles – Node.js und alle Pakete sind eingebettet.

**Verteilen:** Die ZIP-Datei entpacken und `FreeTT.exe` starten. Kein weiteres Setup nötig.

---

## App direkt starten (Entwicklungsmodus)

```bat
start.bat
```

oder:

```
npm start
```

---

## Remote Mode verwenden

1. DM startet FreeTT und klickt auf **🌐 Remote**
2. Im Panel **Session starten** klicken
3. Ein öffentlicher Link wird automatisch erzeugt (z. B. `https://xyz.loca.lt`)
4. Im Panel erscheinen individuelle Links pro Spieler – einen pro Person per Discord/WhatsApp schicken
5. Spieler öffnen den Link im Browser – fertig, keine Installation
6. Sobald der DM eine Karte lädt, sehen alle Spieler sie sofort
7. Spieler können ihr eigenes Token auf der Karte bewegen

**Session beenden:** Im Remote-Panel auf **Session beenden** klicken. Alle Spieler werden getrennt.

---

## Wie funktioniert das?

- FreeTT startet einen kleinen Webserver auf Port 3456 (läuft nur während einer Remote-Session)
- `localtunnel` erstellt einen öffentlichen HTTPS-Tunnel zu diesem Server, ohne Router-Konfiguration
- Alle Daten laufen ausschließlich über den DM-Computer – keine Cloud, keine Datenbank
- Jede Session hat einen einmaligen Code; ohne diesen Code kann niemand beitreten

---

## Häufige Probleme

**„Session konnte nicht gestartet werden"**
→ Internetverbindung prüfen. Firewall oder VPN kann den Tunnel blockieren.
→ Spieler im selben Heimnetz können direkt über `http://<lokale-IP>:3456?session=CODE&player=UUID` verbinden.

**Spieler sehen „Session nicht gefunden"**
→ DM hat die Session beendet. Neuen Link anfordern.

**Karte ist unscharf**
→ Karten werden auf max. 2048 px komprimiert. Originaldatei hochauflösend verwenden.

**Video-Hintergründe im Remote Mode**
→ Videos werden nicht übertragen. YouTube-Musik funktioniert normal.

**Spieler können ihr Token nicht bewegen**
→ Spieler muss den persönlichen Link nutzen (mit `&player=...`). Allgemeine Links sind nur Zuschauer.
