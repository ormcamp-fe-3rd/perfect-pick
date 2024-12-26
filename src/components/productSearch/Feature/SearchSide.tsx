// import ButtonLayout from '../Product/ProductBtn';

interface SearchSideProps {
  imageSrc?: string;
}

function SearchSide({ imageSrc }: SearchSideProps) {
  return (
    <div className="block min-h-[600px] min-w-[380px] lg:hidden">
      <img src={imageSrc}></img>
      {/* 임시 주석 처리 
      <ButtonLayout
        backgroundColor="bg-skyblue"
        height="h-20"
        width="w-[380px]"
        text="맞춤형 제품 추천"
      ></ButtonLayout> 
      */}
    </div>
  );
}

export default SearchSide;
