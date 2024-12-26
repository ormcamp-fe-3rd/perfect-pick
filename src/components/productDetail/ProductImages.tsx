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
      <div className="mb-4 text-xl">
        {`${product.category_id.toUpperCase()} > ${product.brand}`}
      </div>
      <div className="relative h-[500px]">
        <img
          src={imagesList[currentIndex].src}
          alt={imagesList[currentIndex].alt}
          className="m-auto h-full rounded-3xl object-contain"
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
