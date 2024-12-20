import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth';
import {
  doc,
  getDoc,
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
 * @param address 사용자 주소
 */
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
};
