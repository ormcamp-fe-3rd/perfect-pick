import { useState } from 'react';

// interface ProductImagesProp {
//   imagesList: { id: string; src: string; alt: string }[];
// }

export default function ProductImages() {
  const imagesList = [
    { id: '1', src: 'https://i.imgur.com/Jvh1OQmb.jpg', alt: 'image1' },
    { id: '2', src: 'https://i.imgur.com/zADtGy9b.jpg', alt: 'image2' },
    { id: '3', src: 'https://i.imgur.com/Ae1wefjb.jpg', alt: 'image3' },
    { id: '4', src: 'https://i.imgur.com/svOz7A9b.jpg', alt: 'image4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <span className="text-xl">Tablet &gt; Samsung</span>
      <div className="relative mt-4 h-full w-full">
        <img
          src={imagesList[currentIndex].src}
          alt={imagesList[currentIndex].alt}
          className="h-full w-full rounded-3xl object-cover"
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
