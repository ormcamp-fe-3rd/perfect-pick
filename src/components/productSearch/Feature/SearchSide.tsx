import ButtonLayout from './ProductBtn';

interface SearchSideProps {
  imageSrc?: string;
}

function SearchSide({ imageSrc }: SearchSideProps) {
  return (
    <div className="block max-w-[380px] space-y-16 lg:hidden">
      <img src={imageSrc}></img>
      <ButtonLayout
        backgroundColor="bg-skyblue"
        height="h-20"
        width="w-[380px]"
        text="맞춤형 제품 추천"
      ></ButtonLayout>
    </div>
  );
}

export default SearchSide;
