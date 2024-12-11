function HomePage() {
  return (
    <>
      <div>
        <ul>
          <li className="mb-1">
            <strong className="SUIT">기본 폰트 - SUIT</strong>
            <p>
              이미 body에 기본 폰트를 적용해서 따로 폰트이름은 적어주지 않아도
              됩니다.
            </p>
          </li>
          <li>
            <strong className="font-BagelFatOne text-[40px] tracking-normal">
              로고 폰트 - BagelFatOne, PERFECT PICK
            </strong>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="mb-2 text-3xl">폰트</h1>
        <p className="text-4xl font-extrabold">H1 / ExtraBold / 56px</p>
        <p className="text-3xl font-extrabold">H2 / ExtraBold / 46px</p>
        <br />
        <p className="text-2xl font-extrabold">title1 / ExtraBold / 22px</p>
        <p className="text-lg font-semibold">title2 / SemiBold / 18px</p>
        <br />
        <p className="text-xl">Menu / Regular / 20px</p>
        <p className="text-2xl font-semibold">Button1 / SemiBold / 22px</p>
        <p className="text-lg font-semibold">Button2 / SemiBold / 18px</p>
        <p>Body / Regular / 16px</p>
        <br />
        <p className="text-xl font-bold">Subtitl 1 / Bold / 20px</p>
        <p className="text-base font-semibold">subtitle 2 / SemiBold / 16px</p>
        <p className="text-sm font-semibold">subtitle 3 / SemiBold / 14px</p>
      </div>

      <div className="mt-10">
        <h1 className="mb-2 text-3xl">색상</h1>
        <ul className="flex gap-2">
          <li className="h-20 w-20 bg-black"></li>
          <li className="bg-pureblack h-20 w-20"></li>
          <li className="bg-gray h-20 w-20"></li>
          <li className="bg-salmon h-20 w-20"></li>
          <li className="bg-yellow h-20 w-20"></li>
          <li className="bg-pink h-20 w-20"></li>
          <li className="bg-skyblue h-20 w-20"></li>
          <li className="bg-red h-20 w-20"></li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
