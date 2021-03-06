import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function fetchProfilesFromFirestore(limit, lastDocSnapshot = null) {
  return db.collection("activeMembers").orderBy("name").startAfter(lastDocSnapshot).limit(limit);
}

export function listenToProfileFromFirestore(profileId) {
  return db.collection("activeMembers").doc(profileId);
}

export function addProfileToFirestore(profile) {
  return db.collection("activeMembers").add({
    ...profile
  });
}

export function updateProfileInFirestore(profile) {
  return db.collection("activeMembers").doc(profile.id).update(profile);
}

export function deleteProfileInFirestore(profileId) {
  return db.collection("activeMembers").doc(profileId).delete();
}

export function cancelProfileToggle(profile) {
  return db.collection("activeMembers").doc(profile.id).update({
    isCancelled: !profile.isCancelled,
  });
}

export function setUserData(user) {
  return db.collection('users').doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL || null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
}

export function getUser(userId) {
  return db.collection('users').doc(userId);
}

export function getAllUsers() {
  return db.collection('users').orderBy("displayName")
}
