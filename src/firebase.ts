import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth();

/**
 * 회원가입 함수 (이메일/비밀번호)
 * @param email 사용자 이메일
 * @param password 사용자 비밀번호
 */
export const signupEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * 로그인 함수 (이메일/비밀번호)
 * @param email 사용자 이메일
 * @param password 사용자 비밀번호
 */
export const loginEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Firestore에 사용자 정보 저장
 * @param uid Firebase UID
 * @param username 사용자 이름
 * @param email 사용자 이메일
 */
export const saveUserToDB = async (
  uid: string,
  username: string,
  email: string,
) => {
  const userRef = doc(db, 'users', uid); // Firestore의 users 컬렉션에 UID를 키로 사용
  await setDoc(userRef, {
    username,
    email,
    createdAt: new Date(),
  });
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
    username: userData?.username,
    email: userData?.email,
  };
};
