import React, { useState, useEffect } from 'react';

function RandomMiraImages() {
  const [randomImages, setRandomImages] = useState([]);

  const allImages = [
    'photo_2025-08-06_01-42-37-removebg-preview.png',
    'photo_2025-08-06_01-56-36-removebg-preview.png',
    'photo_2025-08-06_01-56-38-removebg-preview.png',
    'photo_2025-08-06_01-56-41-removebg-preview.png',
    'photo_2025-08-06_01-56-48-removebg-preview.png',
    'photo_2025-08-06_02-04-45-removebg-preview.png',
    'photo_2025-08-06_02-04-47-removebg-preview.png'
  ];

  const getRandomPosition = () => ({
    top: Math.random() * 80 + 10, // 10% to 90% from top
    left: Math.random() * 80 + 10, // 10% to 90% from left
  });

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffledImages = shuffleArray(allImages);
    const selectedImages = shuffledImages.slice(0, 3);

    const imagesWithPositions = selectedImages.map(image => ({
      src: `/mira/${image}`,
      position: getRandomPosition(),
      key: Math.random()
    }));

    setRandomImages(imagesWithPositions);
  }, []);

  return (
    <>
      {randomImages.map((image, index) => (
        <img
          key={`${image.key}-${index}`}
          src={image.src}
          alt="Mira"
          className="random-mira-image"
          style={{
            position: 'fixed',
            top: `${image.position.top}%`,
            left: `${image.position.left}%`,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

export default RandomMiraImages;
