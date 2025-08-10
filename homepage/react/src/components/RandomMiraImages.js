import React, { useState, useEffect } from 'react';

function RandomMiraImages() {
  const [randomImage, setRandomImage] = useState(null);

  const allImages = [];

  const importAll =
    (requireContext) =>
      requireContext.keys().forEach(key => allImages.push(key.replace('./', '')));

  importAll(require.context('../../public/mira', false, /\.png$/));

  const getRandomBottomPosition = (imageName) => {
    // Check if the image name contains "left"
    if (imageName.toLowerCase().includes('left')) {
      return {
        bottom: 0,
        left: 0, // Always place at the left corner
      };
    }

    return {
      bottom: 0,
      left: Math.random() * 80 + 10, // 10% to 90% from left for other images
    };
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    const selectedImage = allImages[randomIndex];

    setRandomImage({
      src: `/mira/${selectedImage}`,
      position: getRandomBottomPosition(selectedImage),
      key: Math.random()
    });
  }, []);

  if (!randomImage) return null;

  return (
    <img
      key={randomImage.key}
      src={randomImage.src}
      alt="Mira"
      className="random-mira-image"
      style={{
        position: 'fixed',
        bottom: `${randomImage.position.bottom}%`,
        left: `${randomImage.position.left}%`,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}

export default RandomMiraImages;
