# Firebase Push Notification API

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

A server-side API to send cross-platform push notifications via Firebase Cloud Messaging (FCM).

## 🔥 Core Features
- 📱 Send notifications to Android, iOS, and Web
- 🔐 Secure Firebase Admin SDK integration
- 📊 Supports single device or multicast messaging

## 🛠️ Tech Stack
- **Backend**: Hapi.js (Node.js)
- **Push Service**: Firebase Cloud Messaging
- **Validation**: Joi

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Firebase project with FCM enabled
- Service account credentials JSON file

### Installation
```bash
git clone https://github.com/yourusername/push-notification-api.git
cd push-notification-api
npm install


###Testing Flow
Live Testing Flow
mermaid
Copy
sequenceDiagram
    Client->>Browser: Gets FCM token
    Client->>Postman: Copies token
    Postman->>Hapi API: Sends test notification
    Hapi API->>Firebase: Forwards payload
    Firebase->>Client Device: Delivers notification
    Client Device-->>Firebase: Acknowledgement
    Firebase-->>Hapi API: Delivery report


Key features of this README:
1. **Visual Badges**: Firebase and Hapi.js logos
2. **Structured Documentation**: Clear sections for setup, API reference, and testing
3. **Code Blocks**: Ready-to-copy commands and JSON examples
4. **Troubleshooting**: Common errors table
5. **Mobile/Web Coverage**: Token generation for all platforms

You can copy this directly into your `README.md` file and customize the placeholders (YOUR_FCM_TOKEN, YOUR_VAPID_KEY, etc.) with your actual values.


