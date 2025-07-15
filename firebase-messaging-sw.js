importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD3WVnTHGCTOO2jIU_RlDrN2cCedq18tRI",
  authDomain: "obrichat-4c631.firebaseapp.com",
  projectId: "obrichat-4c631",
  storageBucket: "obrichat-4c631.appspot.com",
  messagingSenderId: "587921807769",
  appId: "1:587921807769:web:386f5370030c1dc8931b08",
  measurementId: "G-D4JV6CEYDW"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em background:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
