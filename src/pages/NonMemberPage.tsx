import { Link } from 'react-router-dom';

import BackMainButton from '@/components/non-member/BackMainButton';
import NonMemberCartList from '@/components/non-member/NonMemberCartList';
import NonMemberInfo from '@/components/non-member/NonMemberInfo';
import NonMemberSectionTitle from '@/components/non-member/NonMemberSectionTitle';

function NonMemberPage() {
  return (
    <div className="white-wrap bg-[#f4f4f4] py-[120px] lg:py-[75px] md:pt-[35px]">
      <div className="white-box mx-auto box-border flex flex-col justify-center rounded-[20px] bg-white px-[100px] pb-[130px] pt-[85px] lg:w-full lg:px-[50px] md:px-[10px] md:pb-[70px] md:pt-[50px]">
        <Link
          to={'/'}
          className="lg:leading-2 inline-block text-center font-BagelFatOne text-[2.5rem] text-[#1F2C3E] md:text-[30px]"
        >
          <h1>PERFECT PICK</h1>
        </Link>
        <h2 className="pt-[70px] text-center text-3xl font-extrabold lg:pt-[50px] md:pt-[25px] md:text-[30px]">
          비회원 주문조회
        </h2>
        <div>
          <NonMemberSectionTitle title="회원정보" firstSection={true} />
          <NonMemberInfo />
        </div>
        <div>
          <NonMemberSectionTitle title="주문 상세 내역" />
          <NonMemberCartList />
        </div>

        <BackMainButton />
      </div>
    </div>
  );
}

export default NonMemberPage;
