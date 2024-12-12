export default function WelcomeMessage() {
  return (
    <div className="flex h-[529px] justify-between rounded-[20px] bg-[#F74927] md:h-[240px] lg:h-[305px]">
      <div className="text-white ml-11 mt-11 flex flex-col gap-4 text-nowrap">
        <p className="font-bold">퍼펙트픽</p>
        <div className="text-3xl font-extrabold md:text-[36px]">
          <p>안녕하세요!</p>
          <p>{`OOO`}님</p>
        </div>
      </div>
      <div className="flex items-end">
        <img
          className="object-scale-down lg:h-full lg:pt-5"
          src="src/assets/images/mypage/card-img.png"
          alt="human image"
        />
      </div>
    </div>
  );
}
