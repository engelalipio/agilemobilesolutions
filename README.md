# Agile Mobile Solutions

Enterprise mobile development website for [agilemobilesolutions.org](https://agilemobilesolutions.org).

Built with **ASP.NET MVC (.NET Framework 4.x)** on the backend and **React 19** on the frontend, deployed to **Azure App Service**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | ASP.NET MVC, .NET Framework 4.x |
| Frontend | React 19, Webpack 5, Babel |
| Styling | Custom CSS design system (navy/blue) |
| Hosting | Azure App Service (East US) |
| CI/CD | GitHub Actions → Azure Web Deploy |
| SSL | Azure App Service Managed Certificate (free, auto-renews) |
| Domain | agilemobilesolutions.org (GoDaddy registrar) |

---

## Project Structure

```
agilemobilesolutions/
├── ClientApp/                  # React frontend
│   ├── src/
│   │   ├── index.jsx           # Home page (hero, service cards, credentials)
│   │   ├── about.jsx           # About page (skills, certifications)
│   │   ├── services.jsx        # Services page (numbered milestone cards)
│   │   ├── contact.jsx         # Contact page
│   │   ├── styles.css          # Shared design system CSS
│   │   └── resources/          # Certification images and PDFs
│   ├── public/
│   │   └── index.html          # Local dev preview shell
│   ├── package.json
│   └── webpack.config.js
├── Controllers/
│   ├── HomeController.cs
│   └── AccountController.cs
├── Views/
│   ├── Home/                   # Razor views (mount React components)
│   │   ├── Index.cshtml
│   │   ├── About.cshtml
│   │   ├── Services.cshtml
│   │   └── Contact.cshtml
│   └── Shared/
│       └── _Layout.cshtml      # Navy header/footer shell
├── Scripts/
│   └── dist/
│       ├── bundle.js           # Compiled React bundle (committed)
│       └── assets/             # Hashed cert images/PDFs (committed)
├── Images/
│   └── AMS/                    # AMS logo, MCSD badge
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
└── .gitignore
```

---

## Local Development

### Prerequisites
- Node.js (v18+)
- npm

### Setup

```bash
# Install dependencies
cd ClientApp
npm install
```

### Running locally

```bash
# Start dev server with hot reload at http://localhost:3000
npm start

# Build production bundle
npm run build

# Watch mode (rebuilds on file save)
npm run watch
```

> **Note:** npm scripts use `node node_modules/...` paths to avoid permission issues with `.bin` symlinks on macOS.

---

## Deployment

### Automatic (recommended)
Every push to `main` triggers a GitHub Actions workflow that:
1. Restores NuGet packages
2. Builds the .NET project with MSBuild
3. Copies web content
4. Deploys to Azure via publish profile

```bash
# Build React bundle first, then push
cd ClientApp && npm run build
cd ..
git add . && git commit -m "your message" && git push origin main
```

### Manual (FTPS fallback)
Connect via Finder → Go → Connect to Server using the FTPS URL from:
```bash
az webapp deployment list-publishing-credentials \
  --resource-group Default-Web-EastUS \
  --name agilemobilesolutions \
  --query "{ftpsEndpoint:ftpsPublishingUrl, user:publishingUserName}" -o table
```

Safe to replace via FTPS: `Views/`, `Scripts/dist/`, `Content/`, `Images/`  
Do **not** replace: `bin/`, `web.config`

---

## Azure Configuration

| Setting | Value |
|---|---|
| Resource Group | Default-Web-EastUS |
| App Service Name | agilemobilesolutions |
| Live URL | https://agilemobilesolutions.azurewebsites.net |
| Vanity URL | https://agilemobilesolutions.org |
| Kudu URL | https://agilemobilesolutions.scm.azurewebsites.net |

### Required GitHub Secret
| Secret | Description |
|---|---|
| `AZURE_PUBLISH_PROFILE` | Contents of the `.PublishSettings` file from Azure Portal → App Service → Get publish profile |

---

## Recent Updates (May 2026)

- **React modernization** — replaced legacy MVC views with React 19 components
- **New design system** — navy/blue palette, hero banner, color-coded service cards
- **Certifications page** — added Microsoft, iOS, BlackBerry, and ICAgile credentials with linked artifact images and PDFs
- **Skills updated** — added Python to Programming Languages; added AI Software Development, MCP Server, LLMs, Claude, ChatGPT, Gemini, Devin AI to frameworks section
- **GitHub Actions CI/CD** — automated deployment pipeline on every push to `main`
- **Free SSL certificate** — switched from expired GoDaddy cert to Azure App Service Managed Certificate (auto-renews every 180 days)
- **Webpack dev server** — hot-reload local development at `http://localhost:3000`
- **Asset pipeline** — webpack bundles certification images and PDFs with cache-busting hashes
