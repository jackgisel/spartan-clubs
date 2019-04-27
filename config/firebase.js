import * as firebase from "firebase";

import config from "../fb";
firebase.initializeApp(config);

const db = firebase.firestore();
export const clubsRef = db.collection('clubs');