# 72Others

Where men are sent in pairs. Modern accountability rooted in Luke 10 - find your anchor, choose your mission, go together.

## Overview

72Others is a community-driven platform that helps men:
- Connect with other men committed to self-improvement
- Form fraternities (accountability groups of 4-8 brothers)
- Follow structured programs (Exodus 90, 75 Hard, and more)
- Access resources without corporate gatekeeping

## Features

### Public-Facing
- **Landing Page**: Mission, vision, and how the movement works
- **Programs**: Browse Christian and secular self-improvement programs
- **Newsletter Signup**: Email capture for program updates and reminders
- **WhatsApp Integration**: Direct link to join the community
- **How It Works**: Detailed explanation of the fraternity formation process

### Admin Dashboard
- **Subscriber Management**: Track email subscribers and their interests
- **Outreach Tracking**: Manage manual outreach contacts and responses
- **Fraternity Management**: Monitor formed and forming fraternities
- **Program Management**: (Coming soon) Manage available programs

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Backend**: AWS Amplify Gen2
- **Database**: DynamoDB (via Amplify Data)
- **Authentication**: AWS Amplify Auth
- **Email**: AWS SES (for newsletter)
- **Hosting**: AWS Amplify Hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- AWS Account (for deployment)
- AWS CLI configured (optional, for deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 72Others
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Setting up AWS Amplify Backend

1. Start the Amplify sandbox (this creates a temporary backend for development):
```bash
npm run sandbox
```

2. The sandbox will:
   - Deploy your backend resources (Auth, Data, API)
   - Generate `amplify_outputs.json` with configuration
   - Watch for changes and auto-deploy

3. Once sandbox is running, the app will connect to your temporary backend

### Testing Admin Dashboard

1. With the sandbox running, navigate to `/admin` in your browser
2. Sign up with an email/password (Amplify Auth will handle this)
3. You'll be able to access the admin dashboard

## Project Structure

```
72Others/
├── amplify/
│   ├── auth/
│   │   └── resource.ts          # Authentication configuration
│   ├── data/
│   │   └── resource.ts          # Database schema (DynamoDB)
│   └── backend.ts               # Backend resource definitions
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation component
│   │   └── Footer.jsx           # Footer component
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Programs.jsx         # Programs listing
│   │   ├── HowItWorks.jsx       # How it works page
│   │   ├── Subscribe.jsx        # Newsletter signup
│   │   ├── WhatsAppRedirect.jsx # WhatsApp community redirect
│   │   └── AdminDashboard.jsx   # Admin dashboard
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind directives
├── package.json
└── README.md
```

## Database Schema

### Subscriber
- email (required)
- name
- location
- interests
- source (where they came from)
- dateJoined
- status
- whatsappJoined

### Program
- name (required)
- description
- duration
- type (Christian/Secular)
- resourcesUrl
- isActive

### Fraternity
- name (required)
- programId
- status (forming/active/completed)
- startDate
- memberCount
- whatsappGroupUrl

### OutreachContact
- name
- source (required)
- dateContacted
- responseStatus
- notes

## Configuration

### WhatsApp Community Link

The WhatsApp community invite link is configured in `src/pages/WhatsAppRedirect.jsx`:

```javascript
const whatsappLink = 'https://chat.whatsapp.com/BRws5fOy1fu6YACOMW7XnT';
```

The redirect functionality is now active and will automatically redirect users after a 5-second countdown.

## Deployment to AWS Amplify

### Option 1: Amplify Console (Recommended)

1. Push your code to GitHub
2. Go to AWS Amplify Console
3. Click "New App" > "Host web app"
4. Connect your GitHub repository
5. Amplify will auto-detect the Amplify Gen2 configuration
6. Deploy

### Option 2: Amplify CLI

1. Install Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Configure Amplify:
```bash
amplify configure
```

3. Initialize Amplify in your project:
```bash
amplify init
```

4. Deploy:
```bash
amplify push
```

## Email Newsletter Setup (AWS SES)

To enable email newsletters:

1. Set up AWS SES in your AWS account
2. Verify your sender email address
3. Create a Lambda function to send emails (or use AWS Pinpoint)
4. Connect the Lambda to your Amplify backend
5. Update the Subscribe page to trigger email workflows

## Next Steps

1. **Create WhatsApp Community**: Set up your WhatsApp Community and update the invite link
2. **Customize Programs**: Add or modify programs in the Programs page
3. **Set up Email System**: Configure AWS SES for newsletter functionality
4. **Manual Outreach**: Use the admin dashboard to track your initial outreach
5. **Branding**: Customize colors, fonts, and messaging to match your vision
6. **Analytics**: Add tracking (Google Analytics, Amplify Analytics, etc.)

## Manual Outreach Strategy

The admin dashboard supports tracking manual outreach contacts. Here's the recommended workflow:

1. Manually collect contact information from communities you're already part of
2. Add contacts to the "Outreach" database via the admin panel
3. Manually send personalized messages (10-20 per day to avoid spam detection)
4. Track responses in the dashboard
5. Update status as people join the WhatsApp community

## License

This is a grassroots community project. Feel free to use, modify, and share.

## Support

For questions or issues, please open an issue on GitHub.

---

Built with faith, brotherhood, and a commitment to helping men become better versions of themselves.
