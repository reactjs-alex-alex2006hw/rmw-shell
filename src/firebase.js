import firebase from 'firebase/app'
import config from './config'
// eslint-disable-next-line
//import firestore from 'firebase/firestore'

export const firebaseApp = firebase.initializeApp(process.env.NODE_ENV !== 'production' ? config.firebase_config_dev : config.firebase_config)
