# Quick Deploy Reference

## ✅ Ready to Deploy!

Your repository is now properly structured with `main` and `dev` branches.

---

## 🚀 Deploy Now (5 Steps)

### 1. Open AWS Amplify Console
👉 **https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1**

### 2. Click "Create new app"

### 3. Select GitHub & Authorize

### 4. Configure:
- **Repository**: `arkadiuszkulpa/72Others`
- **Branch**: `main` ⭐

### 5. Click "Save and deploy"

---

## 📋 Current Setup

| Item | Status |
|------|--------|
| Repository | ✅ https://github.com/arkadiuszkulpa/72Others |
| Main Branch | ✅ Ready for production |
| Dev Branch | ✅ Ready for staging |
| WhatsApp Link | ✅ https://chat.whatsapp.com/BRws5fOy1fu6YACOMW7XnT |
| AWS Account | ✅ 224356102322 |

---

## 🌳 Git Branch Strategy

```
main (production)  → Deploy to Amplify
  └── dev (staging) → Optional staging environment
```

**Workflow:**
1. Make changes on `dev` branch
2. Test locally with `npm run dev`
3. Push to `dev` and test on staging URL (if connected)
4. Merge `dev` to `main` when ready
5. Push to `main` → automatic production deployment

---

## 🔗 Expected URLs

After deployment:
- **Production**: `https://main.d[random].amplifyapp.com`
- **Staging** (if you connect dev): `https://dev.d[random].amplifyapp.com`

---

## ⏱️ Deployment Time

- Initial deployment: ~5-10 minutes
- Future deployments: ~3-5 minutes (automatic on git push)

---

## 📞 Need Help?

See full guide: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

**Current branch**: `main`
**Ready to deploy!** 🎉
