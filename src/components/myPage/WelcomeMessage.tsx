export default function WelcomeMessage() {
  return (
    <div className="flex h-[529px] justify-between text-nowrap rounded-[20px] bg-[#F74927] lg:h-[305px] md:h-[240px]">
      <div className="ml-11 mt-11 flex flex-col gap-4 text-white">
        <p className="font-bold">퍼펙트픽</p>
        <div className="text-3xl font-extrabold md:text-[36px]">
          <p>안녕하세요!</p>
          <p>{`OOO`}님</p>
        </div>
      </div>
      <div className="flex items-end">
        <img
          className="max-h-full object-cover pt-5"
          src="src/assets/images/mypage/card-img.png"
          alt="human image"
        />
      </div>
    </div>
  );
}
