import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyBG1X4y_S61teVYkX44oW1XiRbo4_-9cgU",
	authDomain: "tooshwear-cbd79.firebaseapp.com",
	databaseURL: "https://tooshwear-cbd79.firebaseio.com",
	projectId: "tooshwear-cbd79",
	storageBucket: "tooshwear-cbd79.appspot.com",
	messagingSenderId: "491830255495",
	appId: "1:491830255495:web:894a939bc65e78e2a5bd22",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const createUserProfile = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error while creating user: ", error);
		}
	}

	return userRef;
};

export const addCollectionstoDB = async (collection, collectionItems) => {
	const collectionRef = firestore.collection(collection);

	const batch = firestore.batch();

	collectionItems.forEach(({ title, items }) => {
		const docRef = collectionRef.doc();

		batch.set(docRef, { title, items });
	});

	const result = await batch.commit();

	if (!result) return "Success";
	else return "Failed to add items to collection";
};

export const retrieveConvertCollections = (collectionsRef) => {
	const collections = collectionsRef.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			id: doc.id,
			routeName: encodeURI(title).toLowerCase(),
			title,
			items,
		};
	});

	const collectionsObject = collections.reduce((acc, item) => {
		acc[item.title.toLowerCase()] = item;
		return acc;
	}, {});

	return collectionsObject;
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export default firebase;
