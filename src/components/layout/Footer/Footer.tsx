export default function Footer() {
  return (
    <footer className="mt-44 rounded-t-[30px] bg-pureblack">
      <div className="inner">
        <div className="box-border flex justify-between py-[60px] lg:flex-col-reverse lg:pt-[35px]">
          <p className="text-[#666] md:text-sm">
            퍼펙트픽(주)
            <br />
            대표 홍길동 | 서울 강남구 강남대로 324 역삼디오슈페리움 2층
            모두의연구소
            <br />
            perfectpick@gmail.com | 사업자등록번호 125-15-18521
            <br />
            통신판매업신고번호 제151-서울강남-4811호
          </p>
          <div className="text-right lg:mb-[30px] lg:text-left">
            <a
              href="tel:1544-0015"
              className="text-white block text-3xl font-semibold md:text-[30px]"
            >
              1544-0015
            </a>
            <span className="text-[#666] md:text-sm">
              평일 : 09:00 ~ 18:00, 주말 및 공휴일 : 휴무
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
