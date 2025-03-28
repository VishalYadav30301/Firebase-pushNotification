importScripts(
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js"
  );
  
  const firebaseConfig = {
    apiKey: "AIzaSyCnPmu5-lMQLVdCTGrPF2NRvnWWQEttlF0",
    authDomain: "pushnotification-25d17.firebaseapp.com",
    projectId: "pushnotification-25d17",
    storageBucket: "pushnotification-25d17.firebasestorage.app",
    messagingSenderId: "394133974209",
    appId: "1:394133974209:web:b5462b188afb872602f840",
    measurementId: "G-FFL7WDVVLQ"
  };
  
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) => {
    console.log("Received background message ", payload);
    
    const notificationTitle = payload.notification?.title || "New Message";
    const notificationOptions = {
      body: payload.notification?.body || "You have a new message",
      icon: "/firebase-logo.png",
      data: payload.data || {}
    };
  
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
  
  self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  });