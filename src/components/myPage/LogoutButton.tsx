import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('로그아웃 되었습니다.');
      window.location.href = '/';
    } catch (error) {
      console.log('Logout error:', error);
    }
  };
  return (
    <div className="mt-10 flex justify-end">
      <button
        onClick={handleLogout}
        className="rounded-md bg-salmon p-2 text-white"
      >
        로그아웃
      </button>
    </div>
  );
}
