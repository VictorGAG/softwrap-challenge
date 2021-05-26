/* eslint-disable import/no-anonymous-default-export */
import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
  db,
  takePerson: async () => {
    const list = [];

    const results = await db.collection('person').get();
    results.forEach((result) => {
      const data = result.data();
      list.push({
        id: result.id,
        name: data.name,
        age: data.age,
        status: data.status,
        cpf: data.cpf,
        city: data.city,
        state: data.state,
      });
    });

    return list;
  },
  editPerson: async ({ personId, personData }) => {
    const result = await db.collection('person').doc(personId).set({
      name: personData.name,
      age: personData.age,
      cpf: personData.cpf,
      status: personData.status,
      city: personData.city,
      state: personData.state,
    }, { merge: true });

    return result;
  },
  deletePerson: async ({ personId }) => {
    const result = await db.collection('person').doc(personId).delete();
    return result;
  },
};
