#!/bin/bash

# Configuration
APP_PATH=$(pwd)
PM2_APP_NAME="portfolio"

echo "🚀 Starting Deployment..."

# Navigate to application directory
cd $APP_PATH || { echo "❌ Directory not found: $APP_PATH"; exit 1; }

# Pull updates from main branch
echo "📥 Pulling latest changes from git..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the application
echo "🔨 Building application..."
npm run build

# Restart application with PM2
echo "🔄 Restarting application with PM2..."
pm2 restart $PM2_APP_NAME || pm2 start ecosystem.config.js

# Save PM2 process list
echo "💾 Saving PM2 process list..."
pm2 save

echo "✅ Deployment complete!"
