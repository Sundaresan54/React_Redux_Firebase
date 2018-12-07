const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const admin  = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const gettingNotification = (notification =>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then( doc => {
        console.log("notification added",doc);
    })
})
exports.projectCreated = functions.firestore
.document('/projects/{projectId}')
.onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: "added new user",
        user : `${project.authorFirstName} ${project.authorLastName}`,
        time : admin.firestore.FieldValue.serverTimestamp()

    }
    return gettingNotification(notification);
})


exports.userJoined = functions.auth.user()
                        .onCreate(user => {
                            return admin.firestore().collection('user')
                             .doc(user.uid).get().then( doc => {
                                 const newUser = doc.data();
                                 const notification={
                                     content: "new user joined",
                                     user:`${newUser.firstName} ${newUser.lastName}`,
                                     time:admin.firestore.FieldValue.serverTimestamp()
                                 }
                                 return gettingNotification(notification);
                             })
                             
                            
                        })
