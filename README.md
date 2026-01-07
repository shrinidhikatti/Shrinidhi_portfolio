# Shrinidhi Katti - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my software development projects and skills.

## Features

- **Responsive Design** - Works beautifully on all devices
- **Modern UI** - Clean and professional design with smooth animations
- **Project Showcase** - Display your live projects with descriptions and tech stack
- **Contact Integration** - Direct WhatsApp and Gmail contact buttons
- **GitHub Integration** - Link to your GitHub profile
- **Fast Loading** - Built with Vite for optimal performance

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shrinidhikatti/Shrinidhi_portfolio.git
cd shrinidhi_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Customization

### Update Your Information

1. **Contact Details** (in `src/App.jsx`):
   - Line 39: WhatsApp number already set to 917760437800
   - Line 45: Email already set to katti.shrinidhi@gmail.com
   - Line 135: GitHub profile already set to https://github.com/shrinidhikatti

2. **Projects** (in `src/App.jsx`, lines 5-27):
   Update the `projects` array with your actual projects:
   ```javascript
   {
     id: 1,
     name: 'Your Project Name',
     description: 'Brief description',
     liveUrl: 'https://your-project.com',
     technologies: ['React', 'Node.js', 'MongoDB']
   }
   ```

3. **Services** (in `src/App.jsx`, lines 29-36):
   Customize the services you offer in the `services` array.

4. **GitHub Pages Base Path** (in `vite.config.js`):
   - Already set to `base: '/Shrinidhi_portfolio/'` for deployment to shrinidhikatti.github.io/Shrinidhi_portfolio/
   - If deploying to username.github.io (user site), change to `base: '/'`

## Deployment to GitHub Pages

### Step 1: Initialize Git and Push to Your Repository

Since you already have the repository at https://github.com/shrinidhikatti/Shrinidhi_portfolio.git:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/shrinidhikatti/Shrinidhi_portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project
2. Create a `gh-pages` branch
3. Deploy the built files to GitHub Pages

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **gh-pages** and folder: **/ (root)**
5. Click **Save**

Your site will be live at: `https://shrinidhikatti.github.io/Shrinidhi_portfolio/`

## Updating Your Portfolio

After making changes:

```bash
# Test locally first
npm run dev

# When ready to deploy
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## Project Structure

```
shrinidhi_portfolio/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main portfolio component
│   ├── App.css         # Component styles
│   ├── index.css       # Global styles
│   └── main.jsx        # App entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Technologies Used

- React 19
- Vite
- CSS3 with modern features
- GitHub Pages for hosting

## License

Feel free to use this portfolio template for your own projects!

---

**Designed and Developed by Shrinidhi Katti**
