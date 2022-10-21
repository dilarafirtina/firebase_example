importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDadhOTwZMWTQqZMkvOUqoXccJ817rpWSM",
  authDomain: "guestportal-de002.firebaseapp.com",  
  projectId: "guestportal-de002",  
  storageBucket: "guestportal-de002.appspot.com",  
  messagingSenderId: "740287217421",  
  appId: "1:740287217421:web:717c5286a69ba354b83a44",  
  measurementId: "G-K3WL3G1E96"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
});
  


