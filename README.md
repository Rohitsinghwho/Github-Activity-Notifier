# Github Activity Notifier

A webhook-based application that enables users to get notified in real-time when a PR, issue, or push happens on their GitHub account.

## Description

This application leverages GitHub webhooks to provide instant notifications about repository activities. It acts as a bridge between your GitHub repositories and your notification system, allowing you to monitor important events without constantly checking your GitHub dashboard.

## Features

- Real-time notifications for Pull Requests
- Issue tracking and alerts
- Push event monitoring
- Webhook signature verification for security
- Secure event handling and processing

## Technologies Used

- **Runtime**: Node.js
- **Language**: TypeScript
- **Webhooks**: GitHub Webhooks API

## Project Structure

```
src/
├── routes/        # API routes
├── controllers/   # Business logic handlers
├── utils/         # Utility functions
└── index.ts       # Entry point
```

## Future Enhancement

The following workflow represents the planned OAuth integration for automatic webhook registration:

```
User visits your website
        ↓
Logs in with GitHub (OAuth)
        ↓
Authorizes your app to access their repos
        ↓
Your app auto-registers webhook on their repo
        ↓
Events flow to your server in real time
```

**Benefits of this enhancement:**
- Seamless user onboarding with OAuth authentication
- Automatic webhook setup without manual configuration
- Enhanced security with proper authorization flows
- Real-time event streaming capabilities
- Improved user experience with minimal setup steps

