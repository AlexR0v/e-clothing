import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBe1N0cqTchIZ-tdu1PNcBsEOnLqkelz_0',
  authDomain: 'e-clothing-db-232bc.firebaseapp.com',
  projectId: 'e-clothing-db-232bc',
  storageBucket: 'e-clothing-db-232bc.appspot.com',
  messagingSenderId: '165456373151',
  appId: '1:165456373151:web:ad7e2d1a35c98c613749aa'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
