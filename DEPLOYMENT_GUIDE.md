# AWS Amplify Console Deployment Guide

## Prerequisites ✓
- [x] GitHub repository: https://github.com/arkadiuszkulpa/72Others
- [x] Branch: `main` (production) and `dev` (development)
- [x] Latest code pushed to GitHub
- [x] AWS account configured (Account: 224356102322)
- [x] Amplify Gen2 project structure ready

---

## Step-by-Step Deployment Instructions

### Step 1: Access AWS Amplify Console

1. Open your browser and go to: **https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1**
2. Make sure you're in the **us-east-1** region (top right corner)

### Step 2: Create New Amplify App

1. Click **"Create new app"** button
2. Select **"GitHub"** as your Git provider
3. Click **"Next"**

### Step 3: Authorize GitHub Access

1. You'll be redirected to GitHub to authorize AWS Amplify
2. Click **"Authorize AWS Amplify"**
3. Enter your GitHub password if prompted
4. Select which repositories to grant access to (choose "All repositories" or just "72Others")

### Step 4: Configure Repository and Branch

1. **Repository**: Select `arkadiuszkulpa/72Others` from the dropdown
2. **Branch**: Select `main` (for production deployment)
   - Note: You can also connect the `dev` branch later for a staging environment
3. Check the box for **"Connecting a monorepo? Pick a folder"** if you see it - **leave it unchecked**
4. Click **"Next"**

### Step 5: Configure Build Settings

Amplify should **auto-detect** your Amplify Gen2 configuration. You should see:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
backend:
  phases:
    build:
      commands:
        - npx ampx pipeline-deploy --branch $AWS_BRANCH --app-id $AWS_APP_ID
```

**Important Settings:**
- **App name**: 72Others (auto-filled)
- **Environment name**: production (or leave as default)
- **Build settings**: Should be auto-detected (leave as is)
- **Advanced settings**:
  - Node version: 18 or higher (should auto-detect)

Click **"Next"**

### Step 6: Review and Deploy

1. Review all settings:
   - Repository: arkadiuszkulpa/72Others
   - Branch: main
   - Build settings: Auto-detected

2. Click **"Save and deploy"**

### Step 7: Monitor Deployment

The deployment process will start automatically. You'll see 4 stages:

1. **Provision** - Setting up build environment (~1 min)
2. **Build** - Installing dependencies and building app (~3-5 min)
   - Backend deployment (Amplify Gen2 resources)
   - Frontend build (Vite)
3. **Deploy** - Deploying to CDN (~1 min)
4. **Verify** - Health checks

**Total time**: ~5-10 minutes

### Step 8: Access Your Live Site

Once deployment completes:
1. You'll see a URL like: `https://main.d1234abcd.amplifyapp.com`
2. Click the URL to view your live site
3. Test all features:
   - [ ] Home page loads
   - [ ] All navigation links work
   - [ ] WhatsApp redirect works (goes to: https://chat.whatsapp.com/BRws5fOy1fu6YACOMW7XnT)
   - [ ] Programs page displays correctly
   - [ ] Subscribe form works
   - [ ] Admin dashboard accessible

---

## What Gets Deployed

### Frontend (Static Site)
- React application built with Vite
- Hosted on AWS CloudFront CDN
- Automatic SSL certificate
- Global distribution for fast loading

### Backend (Amplify Gen2)
- **DynamoDB Tables**:
  - Subscriber
  - Program
  - Fraternity
  - OutreachContact
- **Cognito User Pool**: For authentication
- **AppSync API**: GraphQL API for data access
- **Lambda Functions**: Auto-generated for API resolvers

---

## Post-Deployment Configuration

### 1. Custom Domain (Optional)
If you want to use a custom domain like `72others.com`:

1. In Amplify Console, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL certificate will be auto-provisioned

### 2. Environment Variables (If Needed)
Currently, your app doesn't require additional environment variables, but if you add any:

1. Go to **"Environment variables"** in Amplify Console
2. Click **"Manage variables"**
3. Add key-value pairs
4. Redeploy to apply changes

### 3. Branch Deployments (Staging Environment)
To deploy the `dev` branch for a staging environment:

1. In Amplify Console, click **"Connect branch"**
2. Select `dev` branch from dropdown
3. Each branch gets its own URL:
   - `main` → Production: `https://main.d1234abcd.amplifyapp.com`
   - `dev` → Staging: `https://dev.d1234abcd.amplifyapp.com`

---

## Automatic Deployments (CI/CD)

After initial setup, **every push to GitHub** will trigger:
1. Automatic build
2. Automatic deployment
3. Automatic backend updates (if schema changes)

**Example workflow:**
```bash
# Development workflow
git checkout dev
# Make changes locally
git add .
git commit -m "Add new feature"
git push origin dev
# Amplify automatically builds and deploys to staging URL

# Production workflow (after testing on dev)
git checkout main
git merge dev
git push origin main
# Amplify automatically builds and deploys to production URL
```

---

## Monitoring and Logs

### View Build Logs
1. Go to Amplify Console
2. Click on your app
3. Select the branch
4. Click on the build number
5. View detailed logs for each phase

### View App Metrics
- **Hosting metrics**: Traffic, requests, data transfer
- **Backend metrics**: API calls, database operations

---

## Troubleshooting Common Issues

### Issue: Build Fails
**Check:**
- Build logs in Amplify Console
- Node version compatibility (should be 18+)
- Package.json dependencies

### Issue: Backend Deployment Fails
**Check:**
- IAM permissions for Amplify service role
- Region is us-east-1
- No conflicting resources in AWS account

### Issue: Site Shows 404
**Check:**
- Build completed successfully
- `dist` folder was created during build
- Base directory is set to `dist` in build settings

### Issue: WhatsApp Link Not Working
**Check:**
- Link is correct: https://chat.whatsapp.com/BRws5fOy1fu6YACOMW7XnT
- JavaScript is enabled in browser
- No browser extensions blocking redirect

---

## Cost Estimate

### Free Tier (First 12 Months)
- **Build minutes**: 1,000 minutes/month free
- **Hosting**: 15 GB served/month free
- **Storage**: 5 GB free

### After Free Tier
- **Build minutes**: $0.01/minute
- **Hosting**: $0.15/GB served
- **Storage**: $0.023/GB/month

**Estimated monthly cost** (low traffic): $0-5/month

---

## Next Steps After Deployment

1. **Test thoroughly**: All pages, forms, and WhatsApp redirect
2. **Set up custom domain** (optional)
3. **Monitor first users**: Check CloudWatch logs
4. **Set up AWS SES**: For newsletter functionality
5. **Create admin account**: Via /admin page
6. **Add initial program data**: Through admin dashboard

---

## Support Resources

- **Amplify Gen2 Docs**: https://docs.amplify.aws/react/
- **GitHub Repository**: https://github.com/arkadiuszkulpa/72Others
- **AWS Support**: Through AWS Console

---

## Summary

✅ **Repository ready**: All code committed and pushed
✅ **Proper git branches**: `main` (production) and `dev` (development)
✅ **AWS credentials configured**: Account 224356102322
✅ **WhatsApp link active**: https://chat.whatsapp.com/BRws5fOy1fu6YACOMW7XnT
✅ **Messaging updated**: Open-source membership data focus
✅ **Ready to deploy**: Follow steps above

**Deployment URLs will be**:
- Production: `https://main.[random].amplifyapp.com`
- Staging (optional): `https://dev.[random].amplifyapp.com`

## Git Branch Strategy

- **`main`** → Production deployments (deploy this to Amplify)
- **`dev`** → Development/staging (optionally connect for testing)
- Work on features in `dev`, test, then merge to `main` for production

Good luck with your deployment! 🚀
