export class Firebase {

  constructor() {

    this._config = {
      apiKey: "AIzaSyABRA4Egd8K094t_rwRUN6DnnNPgChOVCA",
      authDomain: "whatsapp-clone-72f61.firebaseapp.com",
      projectId: "whatsapp-clone-72f61",
      storageBucket: "gs://whatsapp-clone-72f61.firebasestorage.app",
      databaseURL: "https://whatsapp-clone-72f61.firebaseio.com",
      messagingSenderId: "495845877731",
      appId: "1:495845877731:web:544d2815969d233a9b22d6"
    }

    this.init()

  }

  init() {

    if (!window._initalizedFirebase) {
      firebase.initializeApp(this._config);

      firebase.firestore().settings({
        timestampsInSnapshots: true
      })

      window._initalizedFirebase = true;
    }
  }

  static db() {

    return firebase.firestore();

  }

  static hd() {

    return firebase.storage();

  }

  initAuth() {

    return new Promise((resolve, reject) => {

      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
        .then(
          result =>{

            let token = result.credential.accessToken;
            let user = result.user;

            resolve({user, token});

          }
        )
        .catch(err => {
          reject(err);
        })

    })

  }

}