import PaymentPrivacyModal from '@/components/payment/PaymentPrivacyModal';

interface PaymentMethodSelectorProps {
  id: string;
  label: string;
  style?: string;
}

interface PaymentOptionsProps {
  selectedPayment: string;
  onPaymentSelect: (paymentMethod: string) => void;
  isChecked: boolean;
  onCheckBoxChange: () => void;
}

export default function PaymentOptions({
  selectedPayment,
  onPaymentSelect,
  isChecked,
  onCheckBoxChange,
}: PaymentOptionsProps) {
  const PaymentMethodSelector = ({
    id,
    label,
    style,
  }: PaymentMethodSelectorProps) => {
    return (
      <>
        <div
          className={`${style} flex h-20 w-full items-center justify-center rounded-[10px] border ${selectedPayment === id ? 'border-4 border-green' : 'border'}`}
        >
          <input
            type="radio"
            id={id}
            name="payment"
            value={id}
            checked={selectedPayment === id}
            onChange={() => onPaymentSelect(id)}
            className="hidden"
          ></input>
          <label htmlFor={id}>{label}</label>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-5 text-2xl">
        <PaymentMethodSelector id="creditCard" label="신용/체크카드" />
        <div className="flex w-full justify-between gap-2">
          <PaymentMethodSelector id="TossPay" label="토스페이" />
          <PaymentMethodSelector id="NaverPay" label="네이버페이" />
          <PaymentMethodSelector id="bankTransfer" label="무통장입금" />
        </div>
        <PaymentPrivacyModal
          isChecked={isChecked}
          onCheckBoxChange={onCheckBoxChange}
        />
      </div>
    </>
  );
}
