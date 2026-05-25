# Noor App Website

Marketing and privacy site for **Noor (نور)** — an iOS companion for prayer, remembrance, and the Quran.

Built with **ASP.NET Core Razor Pages** (.NET 10), styled to match the app's dark navy + gold aesthetic (tailored for Noor).

https://www.with-noor.com/

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, how it works, features, screenshots, privacy highlights, contact |
| `/Privacy` | Full bilingual privacy policy (Arabic + English) |

## Run locally

```bash
cd noor-app-website
dotnet run
```

Open `https://localhost:5xxx` or `http://localhost:5xxx` (URL shown in terminal).

## Add real app screenshots

1. Export screenshots from your iPhone (PNG).
2. Copy them to `wwwroot/images/screenshots/ar/` and `wwwroot/images/screenshots/en/`.
3. Screenshots swap automatically when the user switches language (AR/EN).

## Customize before launch

- **App Store URL**: Search for `apps.apple.com` in the project and replace with your real App Store link.
- **Contact email**: Already set to `ahmed.magdy.ibrahim.moharam@gmail.com`.
- **Domain**: Deploy and point your custom domain (e.g. `noorapp.com`) to the host.

## Deploy

### Azure App Service
```bash
dotnet publish -c Release -o ./publish
# Deploy ./publish folder to Azure
```

### Docker (Railway, Render, Fly.io)
```bash
docker build -t noor-website .
docker run -p 8080:8080 noor-website
```

## Tech stack

- ASP.NET Core 10 Razor Pages
- Custom CSS (no Bootstrap dependency in layout)
- IBM Plex Sans Arabic + Playfair Display (Google Fonts)
- AR/EN language switcher with localStorage

## License

© 2026 Noor App. All rights reserved.
