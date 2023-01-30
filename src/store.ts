import firebase from './firebase';

export function persist({
  collection,
  id,
  payload,
}: {
  collection: string;
  id: string;
  payload: any;
}) {
  firebase.setDoc(collection, id, payload);
}
