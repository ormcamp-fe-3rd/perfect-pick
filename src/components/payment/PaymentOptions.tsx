import PaymentPrivacyModal from '@/components/payment/PaymentPrivacyModal';

export default function PaymentOptions() {
  return (
    <>
      <div className="flex flex-col gap-5 text-2xl">
        <button className="h-20 rounded-[10px] border">신용/체크카드</button>
        <div className="flex justify-between gap-3">
          <button className="h-20 flex-1 rounded-[10px] border">
            토스페이
          </button>
          <button className="h-20 flex-1 rounded-[10px] border">
            네이버페이
          </button>
          <button className="h-20 flex-1 rounded-[10px] border">
            무통장입금
          </button>
        </div>
        <PaymentPrivacyModal />
      </div>
    </>
  );
}
