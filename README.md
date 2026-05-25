# Noor App Website

Marketing and privacy site for **Noor (نور)** — an iOS companion for prayer, remembrance, and the Quran.

Built with **ASP.NET Core Razor Pages** (.NET 10), styled to match the app's dark navy + gold aesthetic (similar structure to [Say App](https://www.sayapp.net/), tailored for Noor).

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
2. Copy them to `wwwroot/images/screenshots/` with names like:
   - `moment.png`
   - `prayers.png`
   - `azkar.png`
   - `journey.png`
3. In `Pages/Index.cshtml`, replace the `.screen-mock` blocks with:

```html
<img src="~/images/screenshots/moment.png" alt="لحظتي" />
```

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

### GitHub Pages (static export alternative)
For a static-only host, you can publish as static files or use a small container:

```bash
docker build -t noor-website .
docker run -p 8080:8080 noor-website
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Add Noor app marketing website"
gh repo create noor-app-website --public --source=. --push
```

Or create the repo on GitHub first, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/noor-app-website.git
git branch -M main
git push -u origin main
```

## Tech stack

- ASP.NET Core 10 Razor Pages
- Custom CSS (no Bootstrap dependency in layout)
- IBM Plex Sans Arabic + Playfair Display (Google Fonts)

## License

© 2026 Noor App. All rights reserved.
