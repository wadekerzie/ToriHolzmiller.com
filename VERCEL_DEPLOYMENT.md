# Vercel Deployment Guide

Your Tori Holzmiller brand page is now on GitHub and ready to deploy to Vercel!

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)

Click this button to deploy directly from GitHub:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wadekerzie/ToriHolzmiller.com)

### Option 2: Manual Deployment

1. **Go to [Vercel](https://vercel.com)**
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `wadekerzie/ToriHolzmiller.com`

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (~1-2 minutes)

5. **Get Your URL**
   - Vercel will provide a URL like: `toriholzmiller-com.vercel.app`
   - This is your live site!

## 🌐 Custom Domain Setup (After Purchase)

Once you buy `ToriHolzmiller.com`:

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter `toriholzmiller.com`

2. **Update DNS Records**
   - In your domain registrar (GoDaddy, Namecheap, etc.)
   - Add these DNS records:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

3. **Verify Domain**
   - Vercel will automatically verify
   - SSL certificate will be issued (free)
   - Site will be live at your custom domain!

## 📊 Current Deployment Status

- ✅ **GitHub Repository**: https://github.com/wadekerzie/ToriHolzmiller.com
- ⏳ **Vercel Deployment**: Ready to deploy (follow steps above)
- 📧 **Email Integration**: Needs setup (see EMAIL_INTEGRATION.md)

## 🔄 Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Instant rollbacks if needed

## 🎯 Next Steps

1. Deploy to Vercel using one of the options above
2. Test the live site
3. Set up email integration for the new client form
4. Update placeholder content with real information
5. Purchase domain and connect it
6. Update social media links to point to new site

---

**Need help?** Contact Vercel support or check their [documentation](https://vercel.com/docs).
