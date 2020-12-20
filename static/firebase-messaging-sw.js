
importScripts(
  'https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyA-EaEL2jb8XhP4wly6W3wHmFS7q0NZ7rc","authDomain":"dsc-link.firebaseapp.com","databaseURL":"https:\u002F\u002Fdsc-link.firebaseio.com","projectId":"dsc-link","storageBucket":"dsc-link.appspot.com","messagingSenderId":"954244865743","appId":"1:954244865743:web:65a69de6fafe1faea2a1ba","measurementId":"G-C11KK9F2VL"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"randomName","url":"randomUrl"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
