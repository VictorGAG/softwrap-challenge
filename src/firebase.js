/* eslint-disable import/no-anonymous-default-export */
import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

let last = null;

const query = db.collection('person').orderBy('age').limit(5);

export default {
  db,
  takePerson: async () => {
    const list = [];
    const results = await query.get();

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

    query.get().then((snap) => {
      last = snap.docs[snap.docs.length - 1];
    });

    return (list);
  },

  takeNextPerson: async () => {
    const list = [];
    const results = await db.collection('person')
      .orderBy('age')
      .startAfter(last)
      .limit(5)
      .get();

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

    db.collection('person')
      .orderBy('age')
      .startAfter(last)
      .limit(5)
      .get()
      .then((snap) => {
        last = snap.docs[snap.docs.length - 1];
      });
    return list;
  },

  takePreviusPerson: async () => {
    const list = [];
    const results = await db.collection('person')
      .orderBy('age')
      .endAt(last)
      .limit(5)
      .get();

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

    db.collection('person')
      .orderBy('age')
      .endAt(last)
      .limit(5)
      .get()
      .then((snap) => {
        last = snap.docs[snap.docs.length - 1];
      });
    return list;
  },
  takeSize: async () => {
    const size = await db.collection('person').get().then((snap) => snap.size);
    return size;
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
