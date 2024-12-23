import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,

  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();


export const signupEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};


export const loginEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};


export const saveUserToDB = async (
  uid: string,
  username: string,
  email: string,

  address: string = '서울 강남구 강남대로 324 역삼디오슈페리움 2층 모두의연구소',

) => {
  const userRef = doc(db, 'users', uid); // Firestore의 users 컬렉션에 UID를 키로 사용
  await setDoc(userRef, {
    username,
    email,
    createdAt: new Date(),
    address,
  });
};

export const loadProductToDB = async () => {
  const productsCollectionRef = collection(db, 'products');
  try {
    const querySnapshot = await getDocs(productsCollectionRef);
    const productsList = querySnapshot.docs.map((doc) => doc.data());
    return productsList;
  } catch (error) {
    console.error('제품정보를 가져오는데 오류가 발생했습니다.', error);
    return []; // 오류 발생시 빈 배열 반환
  }
};

export { db };

export const getUserInfo = async () => {
  const auth = getAuth();
  const userAuth = auth.currentUser;

  if (!userAuth) {
    throw new Error('사용자가 로그인되지 않았습니다.');
  }

  const userRef = doc(db, 'users', userAuth.uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error('사용자 정보가 존재하지 않습니다.');
  }

  const userData = userDoc.data();
  return {
    userid: userAuth?.email,
    username: userData?.username,
    email: userData?.email,
    address: userData?.address,
  };
};

export const updateUserPassword = async (
  currentPassword: string,
  newPassword: string,
) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user || !user.email) {
    throw new Error('사용자가 로그인되어 있지 않습니다.');
  }

  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  await reauthenticateWithCredential(user, credential);

  await updatePassword(user, newPassword);
};

export const updateUserAddress = async (newAddress: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user || !user.email) {
    throw new Error('사용자가 로그인되어 있지 않습니다.');
  }

  const db = getFirestore();
  const userRef = doc(db, 'users', user.uid); // Firestore에서 'users' 컬렉션의 문서 참조

  try {
    // Firestore의 'users' 컬렉션에서 해당 사용자의 주소를 업데이트
    await updateDoc(userRef, {
      address: newAddress,
    });

    console.log('주소가 성공적으로 업데이트되었습니다.');
  } catch (error) {
    console.error('주소 업데이트 중 오류가 발생했습니다.', error);
    throw new Error('주소 업데이트 중 오류가 발생했습니다.');
  }

  });
};

export const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();

    // Firebase Auth 상태 변화를 구독: 인증 정보 업데이트
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (!userAuth) {
        unsubscribe(); // 구독 해제
        return;
      }
      try {
        const userRef = doc(db, 'users', userAuth.uid);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
          unsubscribe(); // 구독 해제
          return;
        }

        const userData = userDoc.data();
        unsubscribe(); // 구독 해제
        resolve({
          username: userData?.username,
          email: userData?.email,
          id: userAuth.uid,
        });
      } catch (error) {
        unsubscribe(); // 구독 해제
        reject(error);
      }
    });
  });
};
