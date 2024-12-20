import { useState } from 'react';

export default function ProductImages({ product }: { product: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  const imagesList = Object.entries(product.src).map(([key, value], index) => ({
    id: (index + 1).toString(),
    src: value as string,
    alt: `image_${key}`,
  }));

  return (
    <>
      <span className="text-xl">Tablet &gt; Samsung</span>
      <div className="relative pt-4">
        <img
          src={imagesList[currentIndex].src}
          alt={imagesList[currentIndex].alt}
          className="h-full max-h-[630px] w-full rounded-3xl object-cover"
        />
        <div className="absolute bottom-6 right-6 flex flex-col gap-4">
          {imagesList.map((image, index) => (
            <button
              className="size-5 rounded-full"
              style={
                index === currentIndex
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: '#D9D9D9' }
              }
              key={image.id}
              onClick={() => handleButtonClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
