import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from './firebase';

function App() {
  const [test, setTest] = useState<DocumentData | undefined>(undefined);

  // async - await로 데이터 fetch 대기
  async function getTest() {
    const docRef = doc(db, 'product', '물건1');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTest(docSnap.data()); // DocumentData 타입이므로 문제 해결
    }
  }

  useEffect(() => {
    getTest();
  }, []);

  return <div>{test !== undefined && <div>{test.name}</div>}</div>;
}

export default App;
