const admin = require('firebase-admin');

const serviceAccount = require('./pushnotification-25d17-firebase-adminsdk-fbsvc-17950d0acc.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;